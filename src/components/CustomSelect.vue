<template>
  <ul class="select" v-if="locations && locations.length > 0">
    <li
      v-for="location in locations"
      :key="location.Key"
      class="option"
      @click="$emit('onSelected', location)"
    >
      {{ location.LocalizedName }}
    </li>
  </ul>
  <div v-else-if="locations && locations.length === 0" class="select noMatches">
    No matches
  </div>
  <div class="overlay" @click="$emit('close')" />
</template>

<script lang="ts">
import type { locationInfo } from "@/types/weather.interface";
import { defineComponent, type PropType } from "vue";

type EmitEvents = {
  close: () => void;
  onSelected: (location: locationInfo) => void;
};

export default defineComponent({
  props: {
    locations: {
      type: Array as PropType<locationInfo[] | null>,
      required: true,
    },
  },
  emits: ["close", "onSelected"] as unknown as EmitEvents,
});
</script>

<style scoped>
.select {
  width: calc(100% - 48px);
  margin: 0 auto;
  position: relative;
  max-width: calc(70em - 48px);
  background-color: #ffffff;
  outline: 1px solid #000;
  border-radius: 0 0 4px 4px;
  z-index: 50;
  position: absolute;
  right: 24px;
}
.noMatches {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
}
.option {
  border-top: 1px solid #000;
  padding: 10px 15px;
  font-weight: 700;
  position: relative;
  width: 100%;
  cursor: pointer;
}
.option:hover {
  background-color: #0d2d85;
  color: #fff;
  border: 1px solid #fff;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
