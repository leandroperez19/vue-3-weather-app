<template>
  <main>
    <SearchBar />
    <SavedCities :savedLocations="savedLocations" />
  </main>
</template>

<script lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import SavedCities from "@/components/SavedCities.vue";
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import "vue3-toastify/dist/index.css";

export default defineComponent({
  components: {
    SearchBar,
    SavedCities,
  },
  setup() {
    const store = useStore();
    const savedLocations = computed(() => store.state.savedLocations);

    const getSavedLocations = () => {
      store.dispatch("onGetSavedLocations");
    };

    onMounted(() => {
      getSavedLocations();
    });
    return {
      savedLocations,
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
