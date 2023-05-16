<template>
  <ul class="select" v-if="locations && locations.length > 0">
    <li
      v-for="(location, index) in locations"
      :key="location.Key"
      class="option"
      @click="$emit('onSelected', location)"
      :tabindex="0"
      @keydown="handleKeyDown($event,index,location)"
      @mouseover="handleHover($event,index)"
      ref="element"
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
import { defineComponent, ref, onMounted, type PropType, computed } from "vue";
import { useRouter } from "vue-router";

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

  setup({ locations }) {
    const indexTab = ref(0);
    const element = ref();
    const router = useRouter();

    // const getBorderStyle = (index:number) => {
    //   return {
    //     backgroundColor: index === indexTab ? "blue" : "transparent",
    //   };
    // };

    const handleKeyDown = (e: KeyboardEvent,index: number,location: locationInfo) => {
      if (e.key === "ArrowDown") {
        // indexTab.value = index;
        // console.log(e.target,indexTab.value);
        if(locations && index === locations.length - 1){
          element.value[0].focus()
          return
        } 
        console.log(element.value[index])
        element.value[index + 1].focus()
      }
      if(e.key === 'ArrowUp'){
        if(locations && index === 0){
          element.value[locations.length - 1].focus()
          return
        }
        console.log(element.value[index])
        element.value[index - 1].focus()
      }
      if(e.key === 'Enter'){
        router.push(`/${location.Key}`)
      }
    };

    const handleHover = (e:MouseEvent,index:number)=>{
      element.value[index].focus()
    }


    // onMounted(()=>{
    //   console.log(element.value[0])
    // })

    return {
      indexTab,
      element,
      handleKeyDown,
      handleHover
      // getBorderStyle
    };
  },
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

.option:focus {
  background-color: #0d2d85;
  color: #fff;
  border: 1px solid #fff;
  outline: none;
  border: none;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
