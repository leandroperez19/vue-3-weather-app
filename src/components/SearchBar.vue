<template>
  <div class="searchBar">
    <label for="searchBar_input">
      <FaSearch class="searchBar_inputlens" />
    </label>
    <input
      type="text"
      placeholder="Search for a city..."
      id="searchBar_input"
      @input="inputHandler"
      @focus="setOnFocus"
    />
    <TbCurrentLocation
      class="currentLocation_btn"
      @click="$emit('checkGeoLocation')"
    />
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
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { debounce } from "lodash";
import { useRouter } from "vue-router";
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
        locations !== null && (locations as locationInfo[]).length > 0;
    };

    const inputHandler = (e: any) => {
      debouncedInputHandler(e);
    };

    const navigateToRoute = (location: locationInfo) => {
      router.push(`/${location.Key}`);
    };

    return {
      locations,
      showSelectorList,
      inputHandler,
      navigateToRoute,
      setOnFocus,
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
