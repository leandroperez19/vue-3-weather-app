<template>
  <div class="hourCard">
    <span>12am</span>
    <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="sun">
    <span>19.2°</span>
  </div>
</template>

<script lang="ts">
  export default{
    
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