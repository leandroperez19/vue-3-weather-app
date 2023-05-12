<template>
  <div class="savedCities" v-if="savedLocations && savedLocations.length > 0">
    <h1>Saved Cities:</h1>
    <div class="savedCities_cities">
      <div
        class="savedCities_cities-container"
        v-for="location in savedLocations"
        :key="location.Key"
      >
        <div
          class="savedCities_cities-city"
          @click="$emit('onGoToSavedLocation', location)"
        >
          {{ location.LocalizedName }}
        </div>
        <VscClose @click="$emit('deleteLocation', location)" class="close" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { store } from "@/store";
import type { locationInfo } from "@/types/weather.interface";
import { defineComponent, type PropType } from "vue";
import { VscClose } from "vue3-icons/vsc";

type EmitEvents = {
  onGoToSavedLocation: (location: locationInfo) => void;
  deleteLocation: (location: locationInfo) => void;
};

export default defineComponent({
  components: {
    VscClose,
  },
  props: {
    savedLocations: {
      type: Array as PropType<locationInfo[] | null>,
      required: true,
    },
  },
  emits: ["onGoToSavedLocation", "deleteLocation"] as unknown as EmitEvents,
});
</script>

<style scoped>
.savedCities {
  width: 100%;
  text-align: center;
  color: #fff;
  margin-top: 50px;
}
.savedCities_cities {
  display: grid;
  gap: 15px;
  margin-top: 20px;
}
@media (min-width: 524px) {
  .savedCities_cities {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 768px) {
  .savedCities_cities {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .savedCities_cities {
    grid-template-columns: repeat(4, 1fr);
  }
}

.savedCities_cities-container {
  height: 49px;
  background-color: #17397e;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  position: relative;
  display: flex;
  align-items: center;
}
.savedCities_cities-city {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.savedCities_cities-city:hover {
  background-color: #5282e2;
}
.close {
  cursor: pointer;
  z-index: 200;
  position: absolute;
  right: 5px;
  display: none;
  font-size: 25px;
  padding: 2px;
  transition: all ease 0.3s;
  border-radius: 4px;
}
.savedCities_cities-city:hover + .close {
  display: block;
}
.close:hover {
  display: block;
  background-color: #5b8ccc77;
}
</style>
