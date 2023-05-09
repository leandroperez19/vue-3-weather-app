import { createStore, Commit } from 'vuex';
import { type locationInfo, type DailyForecasts, type FiveDaysInfo, type CurrentWeather } from '@/types/weather.interface';
import { getAutocompletedCountries, getCurrentWeather } from '@/services/weatherService';

interface State {
  locationList: locationInfo[] | null,
  selectedLocation: locationInfo | null,
  currentWeather: CurrentWeather | null,
  forecastsList: DailyForecasts[] | null,
  fiveDaysForecast: FiveDaysInfo | null,
  savedLocations: locationInfo[] | null
}

const store = createStore<State>({
  state() {
    return {
      locationList: null,
      selectedLocation: null,
      currentWeather: null,
      forecastsList: null,
      fiveDaysForecast: null,
      savedLocations: null
    };
  },
  mutations: {
    setLocationList(state: State, list: locationInfo[] | null) {
      state.locationList = list
    },
    setSelectedLocation(state: State, location: locationInfo | null) {
      state.selectedLocation = location
    },
    setCurrentWeather(state: State, weather: CurrentWeather | null) {
      state.currentWeather = weather
    },
    setForecastsList(state: State, list: DailyForecasts[] | null) {
      state.forecastsList = list
    },
    setFiveDaysForecast(state: State, info: FiveDaysInfo | null) {
      state.fiveDaysForecast = info
    },
    setSavedLocations(state: State, list: locationInfo[] | null) {
      state.savedLocations = list
    }
  },
  actions: {
    async onGetLocationListByValue({ commit }: { commit: Commit }, value: string){
      const res = await getAutocompletedCountries(value);
      commit('setLocationList',res.data);
    },
    async onGetWeatherData({ commit }: { commit: Commit }, key: string){
      const res = await getCurrentWeather(key);
      commit('setCurrentWeather',res.data);
      console.log(res.data)
    }
  },
  getters: {
    doubleCount(state: State) {
     
    }
  }
});

export default store;
