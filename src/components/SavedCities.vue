<template>
  <div class="savedCities">
    <h1>Saved Cities:</h1>
    <div class="savedCities_cities">
      <RouterLink to="/12" class="savedCities_cities-city" > 
        Rabat,Morocco
      </RouterLink >
    </div>
  </div>
</template>

<script lang="ts">
  import {RouterLink} from 'vue-router'
  export default{
    components:{
      RouterLink
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
    max-width: 250px;
    cursor: pointer;
    transition: background-color cubic-bezier(0.165, 0.84, 0.44, 1) .3s;
  }
  .savedCities_cities-city:hover{
    background-color: #5282e2;
  }

</style>