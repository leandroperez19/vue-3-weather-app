<template>
  <div class="currentWeatherInfo">
    <h1>
      {{
        `${locationName?.LocalizedName}, ${locationName?.Country.LocalizedName}`
      }}
    </h1>
    <h2>{{ getShortDate(weather?.LocalObservationDateTime ?? "") }}</h2>
    <div class="info">
      <div class="info_top-left">
        <img
          :src="`https://developer.accuweather.com/sites/default/files/${
            weather && weather?.WeatherIcon < 10
              ? '0' + weather?.WeatherIcon
              : weather?.WeatherIcon
          }-s.png`"
          alt="img"
        />
        <div class="info_top-left-temp">
          <h3>{{ `${weather?.Temperature.Metric.Value}°` }}</h3>
          <span>{{ `${weather?.WeatherText}` }}</span>
        </div>
      </div>
      <div class="info_bottom-right">
        <div class="high">
          <h4>
            {{
              `${weather?.TemperatureSummary.Past24HourRange.Maximum.Metric.Value}°`
            }}
          </h4>
          <span>High</span>
        </div>
        <div class="low">
          <h4>
            {{
              `${weather?.TemperatureSummary.Past24HourRange.Minimum.Metric.Value}°`
            }}
          </h4>
          <span>Low</span>
        </div>
        <div class="wind">
          <h4>{{ `${weather?.Wind.Speed.Imperial.Value}mph` }}</h4>
          <span>Wind</span>
        </div>
        <div class="pressure">
          <h4>{{ `${weather?.Pressure.Imperial.Value}in` }}</h4>
          <span>Pressure</span>
        </div>
        <div class="humidity">
          <h4>{{ `${weather?.RelativeHumidity}%` }}</h4>
          <span>Humidity</span>
        </div>
        <div class="precipitation">
          <h4>
            {{ `${weather?.PrecipitationSummary.Precipitation.Metric.Value}%` }}
          </h4>
          <span>Precipitation</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  type CurrentWeather,
  type locationInfo,
} from "@/types/weather.interface";
import { getShortDate } from "@/utils/getFormattedTime";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  setup() {
    return {
      getShortDate,
    };
  },
  props: {
    weather: {
      type: Object as PropType<CurrentWeather | null>,
      required: true
    },
    locationName: {
      type: Object as PropType<locationInfo | null>,
      required: true
    },
  },
});
</script>

<style>
.currentWeatherInfo {
  color: #fff;
  max-width: 324px;
  margin: 10px auto;
  text-align: center;
}
h1 {
  font-weight: 500;
}
h2 {
  font-size: 16px;
  font-weight: 300;
}
.info {
  display: flex;
  flex-direction: column;
}
.info_top-left {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid #777;
}
.info_top-left img {
  height: 8em;
  width: 12em;
}
.info_top-left-temp {
  text-align: center;
}
.info_top-left-temp h3 {
  font-size: 75px;
  font-weight: 300;
  margin-left: 20px;
}
.info_bottom-right {
  display: grid;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  margin: 20px 0;
}
.info_bottom-right h4 {
  font-size: 25px;
  font-weight: 400;
}
.info_bottom-right span {
  font-size: 14px;
  font-weight: 300;
}

@media (min-width: 768px) {
  .currentWeatherInfo {
    max-width: 842px;
    text-align: left;
  }
  .info {
    flex-direction: row;
    max-width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
  .info_top-left {
    border: none;
    border-right: 1px solid #777;
  }
  .info_bottom-right {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2, 30px;
  }
  .low {
    grid-row: 2;
  }
  .pressure {
    grid-row: 2;
  }
}
</style>
