<template>
  <div class="searchBar">
    <label for="searchBar_input">
      <FaSearch class="searchBar_inputlens" />
    </label>
    <input type="text" placeholder="Search for a city..." id="searchBar_input" @input="inputHandler" >
    <TbCurrentLocation class="currentLocation_btn" />
  </div>
  <CustomSelect :countries='countries' />
</template>

<script lang="ts">
  import {FaSearch} from 'vue3-icons/fa';
  import {TbCurrentLocation} from 'vue3-icons/tb';
  import CustomSelect from './CustomSelect.vue';
  import {ref,defineComponent} from 'vue';

  export default defineComponent({
    components:{
      CustomSelect,
      FaSearch,
      TbCurrentLocation
    },
    setup(){
      const countries = ref([{name:'Venezuela',key:1}]);
      const inputHandler = () => {
        console.log('x')
      }
      return{
        countries,
        inputHandler
      }
    }
  })
</script>

<style scoped >
  .searchBar{
    height: 4em;
    width: 100%;
    position: relative;
    margin-top: 18em;
    position: relative;
    max-width: 70em;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  input{
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding-left: 55px;
    font-size: 16px;
  }
  label{
    position: absolute;
    left: 15px;
  }
  svg{
    width: 20px;
    height: 20px;
    color: #7989ac;
    cursor: text;
  }
  .currentLocation_btn{
    width: 60px;
    height: 40px;
    padding: 8.5px 0;
    border-left: 1px solid #777;
    cursor: pointer;
  }
  .currentLocation_btn:hover{
    color: blue;
  }
</style>