<template>
  <div class="weatherView">
    <RouterLink to="/" class="goBack_btn" >
      <FaArrowLeft />
    </RouterLink>
    <button class="saveLocation_btn">SAVE LOCATION</button>
    <CurrentWeatherInfo />
    <div class="todaysWeather">
      <h5>Today's Weather</h5>
      <div class="dailyWeather">
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
        <HourCard />
      </div>
    </div>
    <div class="nextDays">
      <h5>Next 3 days</h5>
      <DayCard />
      <DayCard />
      <DayCard />
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
    return {
      routeParam
    };
  }
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
