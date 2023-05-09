<template>
  <div class="dayCard">
    <div class="day">
      <h4>Wed</h4>
      <span>24/04</span>
    </div>
    <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="sun">
    <div class="low">
      <h4>30°</h4>
      <span>Low</span>
    </div>
    <div class="high">
      <h4>30°</h4>
      <span>High</span>
    </div>
    <div class="rain">
      <h4>0%</h4>
      <span>Rain</span>
    </div>
    <div class="wind">
      <h4>9.4mph</h4>
      <span>Wind</span>
    </div>
  </div>
</template>

<script lang="ts">
export default{

}
</script>

<style>
  .dayCard{
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
  .dayCard span{
    font-size: 14px;
    font-weight: 200;
  }
  .dayCard h4{
    font-size: 18px;
    font-weight: 400;
  }
  @media (max-width: 425px) {
    .dayCard{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 15px 0;
    }
    .dayCard img{
      margin: 0 auto;
    }
  }
</style>