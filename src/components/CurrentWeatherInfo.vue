<template>
  <div class="currentWeatherInfo">
    <h1>Rabat, Morocco</h1>
    <h2>Wednesday 26 April</h2>
    <div class="info">
      <div class="info_top-left">
        <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="sun">
        <div class="info_top-left-temp">
          <h3>31°</h3>
          <span>Sunny</span>
        </div>
      </div>
      <div class="info_bottom-right">
        <div class="high">
          <h4>30°</h4>
          <span>High</span>
        </div>
        <div class="low">
          <h4>30°</h4>
          <span>Low</span>
        </div>
        <div class="wind">
          <h4>9.4mph</h4>
          <span>Wind</span>
        </div>
        <div class="pressure">
          <h4>29.85in</h4>
          <span>Pressure</span>
        </div>
        <div class="humidity">
          <h4>41%</h4>
          <span>Humidity</span>
        </div>
        <div class="precipitation">
          <h4>29.85%</h4>
          <span>Precipitation</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default{

}
</script>

<style>
  .currentWeatherInfo{
    color: #fff;
    max-width: 324px;
    margin: 10px auto;
    text-align: center;
  }
  h1{
    font-weight: 500;
  }
  h2{
    font-size: 16px;
    font-weight: 300;
  }
  .info{
    display: flex;
    flex-direction: column;
  }
  .info_top-left{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-bottom: 1px solid #777;
  }
  .info_top-left img{
    height: 8em;
    width: 12em;
  }
  .info_top-left-temp{
    text-align: center;
  }
  .info_top-left-temp h3{
    font-size: 75px;
    font-weight: 300;
    margin-left: 20px;
  }
  .info_bottom-right{
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  .info_bottom-right h4{
    font-size: 25px;
    font-weight: 400;
  }
  .info_bottom-right span{
    font-size: 14px;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    .currentWeatherInfo{
      max-width: 842px;
      text-align: left;
    }
    .info{
      flex-direction: row;
      max-width: 100%;
      justify-content: space-around;
      margin-top: 20px;
    }
    .info_top-left{
      border: none;
      border-right: 1px solid #777;
    }
    .info_bottom-right{
      grid-template-columns: repeat(3,1fr);
      grid-template-rows: 2, 30px;
    }
    .low{
      grid-row: 2;
    }
    .pressure{
      grid-row: 2;
    }
  }
  
</style>