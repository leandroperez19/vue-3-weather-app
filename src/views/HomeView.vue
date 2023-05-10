<template>
  <main>
    <SearchBar @checkGeoLocation="getGeoLocation" />
    <SavedCities :savedLocations="savedLocations" />
  </main>
</template>

<script lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import SavedCities from "@/components/SavedCities.vue";
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { getLocationByLatnLog } from "@/services/weatherService";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineComponent({
  components: {
    SearchBar,
    SavedCities,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const savedLocations = computed(() => store.state.savedLocations);

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

    const getSavedLocations = () => {
      store.dispatch("onGetSavedLocations");
    };

    onMounted(() => {
      getSavedLocations();
    });
    return {
      savedLocations,
      getGeoLocation,
    };
  },
});
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 24px;
  max-width: 70em;
  margin: 0 auto;
  position: relative;
}
</style>
