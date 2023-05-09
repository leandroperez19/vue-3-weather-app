<template>
  <ul class="select">
    <li v-for="country in countries" :key="country.key" class="option" >
      {{ country.name }}
    </li>
  </ul>
</template>

<script lang="ts" >
  import type {Country} from '../types/Country';

  export default{
    props:{
      countries:{
        type: Array as () => Country[],
        default: []
      }
    }
  }
</script>

<style scoped>
  .select{
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 70em;
    background-color: #ffffff;
    outline: 1px solid #000;
    border-radius: 0 0 4px 4px;
  }
  .option{
    border-top: 1px solid #000;
    padding: 10px 15px;
    font-weight: 700;
    position: relative;
    width: 100%;
    cursor: pointer;
  }
  .option:hover{
    background-color: #0d2d85;
    color: #fff;
    border: 1px solid #fff;
  }
</style>