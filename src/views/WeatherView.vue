<template>
  <div class="weatherView">
    <RouterLink to="/" class="goBack_btn" >
      <FaArrowLeft />
    </RouterLink>
    <button class="saveLocation_btn" v-if="selectedLocation" @click="saveNewLocation" >
      SAVE LOCATION
    </button>
    <CurrentWeatherInfo v-if="weather" :weather="weather[0]" :locationName="locationName" />
    <div class="todaysWeather">
      <h5>Today's Weather</h5>
      <div class="dailyWeather">
        <HourCard  v-if="twelveHoursForecast" :twelveHoursForecast="twelveHoursForecast" />
      </div>
    </div>
    <div class="nextDays">
      <h5>Next 5 days</h5>
      <DayCard v-if="fiveDaysData" :fiveDaysData="fiveDaysData" />
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import HourCard from '@/components/HourCard.vue';
import CurrentWeatherInfo from '@/components/CurrentWeatherInfo.vue';
import DayCard from '@/components/DayCard.vue';
import {defineComponent} from 'vue';
import {FaArrowLeft} from 'vue3-icons/fa';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import type { locationInfo } from '@/types/weather.interface';


export default defineComponent({
  components:{
    HourCard,
    CurrentWeatherInfo,
    DayCard,
    FaArrowLeft,
    RouterLink
  },
  setup() {
    const route = useRoute();
    const routeParam = route.params.id;
    const store = useStore();
    const weather = computed(()=> store.state.currentWeather);
    const locationName = computed(()=> store.state.selectedLocation);
    const twelveHoursForecast = computed(()=> store.state.forecastsList);
    const fiveDaysData = computed(()=> store.state.fiveDaysForecast);
    const selectedLocation = computed(()=> store.state.selectedLocation);

    const getCurrentWeatherData = () => {
      store.dispatch('onGetWeatherData',routeParam);
    }
    const getLocationName = () => {
      store.dispatch('onGetLocationInfo',routeParam);
    }
    const getTwelveHoursData = () => {
      store.dispatch('onGetTwelveHoursForecast',routeParam)
    }
    const getFiveDaysData = () => {
      store.dispatch('onGetFiveDaysForecast',routeParam)
    }
    const saveNewLocation = () => {
      store.dispatch('onSaveNewLocation')
    }

    onMounted(()=>{
      getCurrentWeatherData()
      getLocationName()
      getTwelveHoursData()
      getFiveDaysData()
    });

    return {
      routeParam,
      weather,
      locationName,
      twelveHoursForecast,
      fiveDaysData,
      selectedLocation,
      saveNewLocation,
    };
  },
});
</script>

<style>
  .weatherView{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 24px;
    max-width: 822px;
    margin: 0 auto;
    position: relative;
  }
  .goBack_btn{
    font-size: 25px;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;
    transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) .3s;
  }
  .goBack_btn:hover{
    background-color: #fff3;
  }
  .saveLocation_btn{
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: #f6a91b;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
  }
  .saveLocation_btn:hover{
    background-color: #f6a91bbd;
  }
  @media (max-width:822px) {
    .saveLocation_btn{
      right: 24px;
    }
  }
  .todaysWeather{
    margin: 20px auto;
  }
  .dailyWeather{
    display: flex;
    max-width: 100%;
    overflow-x: scroll;
  }
  .todaysWeather h5, .nextDays h5{
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 20px;
  }
  .nextDays{
    margin: 20px auto;
  }
  
  @media (max-width:768px) {
    .weatherView{
      text-align: center;
    }
  }
</style>
