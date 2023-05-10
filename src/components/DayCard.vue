<template>
  <div class="dayCard" v-for="day in fiveDaysData?.DailyForecasts">
    <div class="day">
      <h4>{{ getShortDate(day.Date) }}</h4>
      <span>{{ getShortNumericDate(day.Date) }}</span>
    </div>
    <img
      :src="`https://developer.accuweather.com/sites/default/files/${
        day.Day.Icon < 10 ? '0' + day.Day.Icon : day.Day.Icon
      }-s.png`"
      alt="sun"
    />
    <div class="low">
      <h4>{{ `${getFahrenheitToCelsius(day.Temperature.Minimum.Value)}°` }}</h4>
      <span>Low</span>
    </div>
    <div class="high">
      <h4>{{ `${getFahrenheitToCelsius(day.Temperature.Maximum.Value)}°` }}</h4>
      <span>High</span>
    </div>
    <div class="rain">
      <h4>{{ `${day.Day.RainProbability}%` }}</h4>
      <span>Rain</span>
    </div>
    <div class="wind">
      <h4>{{ `${day.Day.Wind.Speed.Value}mph` }}</h4>
      <span>Wind</span>
    </div>
  </div>
</template>

<script lang="ts">
import { type FiveDaysInfo } from "@/types/weather.interface";
import getFahrenheitToCelsius from "@/utils/getFahrenheitToCelsius";
import { getShortDate, getShortNumericDate } from "@/utils/getFormattedTime";

export default {
  props: {
    fiveDaysData: {
      type: Object as () => FiveDaysInfo,
    },
  },
  setup() {
    return {
      getFahrenheitToCelsius,
      getShortDate,
      getShortNumericDate,
    };
  },
};
</script>

<style>
.dayCard {
  width: 100%;
  background-color: #1c47a0;
  padding: 24px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #fff;
  border-radius: 4px;
  text-align: center;
}
.dayCard span {
  font-size: 14px;
  font-weight: 200;
}
.dayCard h4 {
  font-size: 18px;
  font-weight: 400;
}
@media (max-width: 425px) {
  .dayCard {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px 0;
  }
  .dayCard img {
    margin: 0 auto;
  }
}
</style>
