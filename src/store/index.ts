import { createStore, Commit, useStore as baseUseStore, Store } from "vuex";
import { type InjectionKey } from "vue";
import {
  type locationInfo,
  type DailyForecasts,
  type FiveDaysInfo,
  type CurrentWeather,
} from "@/types/weather.interface";
import {
  getAutocompletedCountries,
  getCurrentWeather,
  getFiveDaysForecast,
  getLocationByKey,
  getTwelveHoursForecast,
} from "@/services/weatherService";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
interface State {
  locationList: locationInfo[] | null;
  selectedLocation: locationInfo | null;
  currentWeather: CurrentWeather[] | null;
  forecastsList: DailyForecasts[] | null;
  fiveDaysForecast: FiveDaysInfo | null;
  savedLocations: locationInfo[] | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      locationList: null,
      selectedLocation: null,
      currentWeather: null,
      forecastsList: null,
      fiveDaysForecast: null,
      savedLocations: null,
    };
  },
  mutations: {
    setLocationList(state: State, list: locationInfo[] | null) {
      state.locationList = list;
    },
    setSelectedLocation(state: State, location: locationInfo | null) {
      state.selectedLocation = location;
    },
    setCurrentWeather(state: State, weather: CurrentWeather[] | null) {
      state.currentWeather = weather;
    },
    setForecastsList(state: State, list: DailyForecasts[] | null) {
      state.forecastsList = list;
    },
    setFiveDaysForecast(state: State, info: FiveDaysInfo | null) {
      state.fiveDaysForecast = info;
    },
    setSavedLocations(state: State, list: locationInfo[] | null) {
      state.savedLocations = list;
    },
  },
  actions: {
    async onGetLocationListByValue(
      { commit }: { commit: Commit },
      value: string
    ) {
      const res = await getAutocompletedCountries(value);
      commit("setLocationList", res.data);
    },
    async onGetWeatherData({ commit }: { commit: Commit }, key: string) {
      commit("setCurrentWeather", null);
      const res = await getCurrentWeather(key);
      if (res.error) toast.error(`There was an error: ${res.error}`);
      commit("setCurrentWeather", res.data);
    },
    async onGetLocationInfo({ commit }: { commit: Commit }, key: string) {
      const res = await getLocationByKey(key);
      if (res.error) toast.error(`There was an error: ${res.error}`);
      commit("setSelectedLocation", res.data);
    },
    async onGetTwelveHoursForecast(
      { commit }: { commit: Commit },
      key: string
    ) {
      const res = await getTwelveHoursForecast(key);
      if (res.error) toast.error(`There was an error: ${res.error}`);
      commit("setForecastsList", res.data);
    },
    async onGetFiveDaysForecast({ commit }: { commit: Commit }, key: string) {
      const res = await getFiveDaysForecast(key);
      if (res.error) toast.error(`There was an error: ${res.error}`);
      commit("setFiveDaysForecast", res.data);
    },
    onGetSavedLocations({ commit }: { commit: Commit }) {
      const savedLocationsRaw = localStorage.getItem("savedLocations") ?? "[]";
      const savedLocationsParsed = JSON.parse(savedLocationsRaw);
      commit("setSavedLocations", savedLocationsParsed);
    },
    onSaveNewLocation({ commit, state }: { commit: Commit; state: State }) {
      const location = state.selectedLocation;
      if (!location) return;

      const savedLocationsRaw = localStorage.getItem("savedLocations") ?? "[]";
      const savedLocationsParsed: locationInfo[] =
        JSON.parse(savedLocationsRaw);

      const exist = savedLocationsParsed.find((l) => l.Key === location.Key);

      if (!exist) {
        savedLocationsParsed.push(location);
        commit("setSavedLocations", savedLocationsParsed);
        localStorage.setItem(
          "savedLocations",
          JSON.stringify(savedLocationsParsed)
        );
        toast.success("New location saved!");
      } else {
        toast.info("You have already saved this location!");
      }
    },
    onDeleteLocation(
      { commit, state }: { commit: Commit; state: State },
      location: locationInfo
    ) {
      const savedLocationsRaw = localStorage.getItem("savedLocations") ?? "[]";
      let savedLocationsParsed: locationInfo[] = JSON.parse(savedLocationsRaw);

      const exist = savedLocationsParsed.find((l) => l.Key === location.Key);

      if (!exist) return;

      savedLocationsParsed = savedLocationsParsed.filter(
        (l) => l.Key !== location.Key
      );
      commit("setSavedLocations", savedLocationsParsed);
      localStorage.setItem(
        "savedLocations",
        JSON.stringify(savedLocationsParsed)
      );
      toast.success(`Location ${location.LocalizedName} removed succesfully!`);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
