<template>
  <ul class="select" v-if="locations && locations.length > 0">
    <li v-for="location in locations" :key="location.Key" class="option" @click="$emit('onSelected',location)" >
      {{ location.LocalizedName }}
    </li>
  </ul>
  <div v-else-if="locations && locations.length === 0" class="select">
    No matches :c
  </div>
</template>

<script lang="ts" >
  import type { locationInfo } from '@/types/weather.interface';

  export default{
    props:{
      locations:{
        type: Array as () => locationInfo[] | null,
      }
    },
  }
</script>

<style scoped>
  .select{
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 70em;
    background-color: #ffffff;
    outline: 1px solid #000;
    border-radius: 0 0 4px 4px;
  }
  .option{
    border-top: 1px solid #000;
    padding: 10px 15px;
    font-weight: 700;
    position: relative;
    width: 100%;
    cursor: pointer;
  }
  .option:hover{
    background-color: #0d2d85;
    color: #fff;
    border: 1px solid #fff;
  }
</style>