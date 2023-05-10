<template>
  <div class="savedCities" v-if="savedLocations && savedLocations.length > 0">
    <h1>Saved Cities:</h1>
    <div class="savedCities_cities">
      <div class="savedCities_cities-city" v-for="location in savedLocations" :key="location.Key" @click="onGoToSavedLocation(location)" > 
        {{location.LocalizedName}}
      </div >
    </div>
  </div>
</template>

<script lang="ts">
  import type { locationInfo } from '@/types/weather.interface';
import {RouterLink, useRouter} from 'vue-router'
  export default{
    components:{
      RouterLink
    },
    props:{
      savedLocations:{
        type: Array as ()=> locationInfo[],
        required: true
      }
    },
    setup(){
      const router = useRouter()
      const onGoToSavedLocation = (location: locationInfo) =>{
        router.push(`/${location.Key}`)
      }
      return{
        onGoToSavedLocation
      }
    }
  }
</script>

<style scoped>
  .savedCities{
    width: 100%;
    text-align: center;
    color: #fff;
    margin-top: 50px;
  }
  .savedCities_cities{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 15px;
    margin-top: 20px;
  }
  .savedCities_cities-city{
    padding: 15px;
    text-align: center;
    background-color: #1c47a0;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) .3s;
  }
  .savedCities_cities-city:hover{
    background-color: #5282e2;
  }

</style>