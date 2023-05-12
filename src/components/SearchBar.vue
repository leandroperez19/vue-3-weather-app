<template>
  <div class="searchBar">
    <label for="searchBar_input">
      <FaSearch class="searchBar_inputlens" />
    </label>
    <input
      autocomplete="off"
      type="text"
      placeholder="Search for a city..."
      id="searchBar_input"
      @input="inputHandler"
      @focus="setOnFocus"
    />
    <TbCurrentLocation class="currentLocation_btn" @click="getGeoLocation" />
  </div>
  <CustomSelect
    v-if="showSelectorList"
    :locations="locations"
    @onSelected="navigateToRoute"
    @close="showSelectorList = false"
  />
</template>

<script lang="ts">
import { FaSearch } from "vue3-icons/fa";
import { TbCurrentLocation } from "vue3-icons/tb";
import CustomSelect from "./CustomSelect.vue";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
import { debounce } from "lodash";
import { useRouter } from "vue-router";
import { getLocationByLatnLog } from "@/services/weatherService";
import { toast } from "vue3-toastify";
import type { locationInfo } from "@/types/weather.interface";

export default defineComponent({
  components: {
    CustomSelect,
    FaSearch,
    TbCurrentLocation,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const locations = computed(() => store.state.locationList);
    const showSelectorList = ref(false);

    const debouncedInputHandler = debounce(async (e: Event) => {
      const target = e.target as HTMLInputElement | null;
      if (target) {
        if (showSelectorList.value) showSelectorList.value = false;
        await store.dispatch("onGetLocationListByValue", target.value);
        showSelectorList.value = true;
      }
    }, 700);

    const setOnFocus = () => {
      showSelectorList.value =
        locations !== null &&
        (locations as unknown as locationInfo[]).length > 0;
    };

    const inputHandler = (e: any) => {
      debouncedInputHandler(e);
    };

    const navigateToRoute = (location: locationInfo) => {
      router.push(`/${location.Key}`);
    };

    const getGeoLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const res = await getLocationByLatnLog(`${latitude},${longitude}`);

            if (res.error) toast.error(`There was an error: ${res.error}`);
            if (res.data?.Key) router.push(`${res.data?.Key}`);
          },
          (error) => {
            toast.error(`Error on getting geoLocation: ${error.message}`);
          }
        );
      } else {
        toast.error("Geolocation is not compatible with this browser!");
      }
    };

    return {
      locations,
      showSelectorList,
      inputHandler,
      navigateToRoute,
      setOnFocus,
      getGeoLocation,
    };
  },
});
</script>

<style scoped>
.searchBar {
  height: 4em;
  width: 100%;
  position: relative;
  margin-top: 18em;
  position: relative;
  max-width: 70em;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 50;
}
input {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding-left: 55px;
  font-size: 16px;
}
label {
  position: absolute;
  left: 15px;
}
svg {
  width: 20px;
  height: 20px;
  color: #7989ac;
  cursor: text;
}
.currentLocation_btn {
  width: 60px;
  height: 40px;
  padding: 8.5px 0;
  border-left: 1px solid #777;
  cursor: pointer;
}
.currentLocation_btn:hover {
  color: blue;
}
</style>
