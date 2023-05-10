<template>
  <div class="hourCard" v-for="hour in twelveHoursForecast" >
    <span>{{ getFormattedHour(hour.DateTime) }}</span>
    <img :src="`https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon < 10 ? '0' + hour.WeatherIcon : hour.WeatherIcon}-s.png`" alt="sun">
    <span>{{`${hour.Temperature.Value}°`}}</span>
  </div>
</template>

<script lang="ts">
import type { DailyForecasts } from '@/types/weather.interface';
import { getFormattedHour } from '@/utils/getFormattedTime';

  export default{
    props:{
      twelveHoursForecast:{
        type: Array as ()=> DailyForecasts[]
      }
    },
    setup(){
      return{
        getFormattedHour
      }
    } 
  }
</script>

<style>
  .hourCard{
    width: 6em;
    background-color: #1c47a0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    justify-content: space-between;
    color: #fff;
    height: 9em;
    border-radius: 4px;
    margin: 0 auto;
    margin-right: 8px;
    margin-bottom: 10px;
  }
  .hourCard:last-child{
    margin-right: 0;
  }

</style>