<template>
  <div class="searchBar">
    <div class="searchBar_div">
      <label for="searchBar_input">
        <FaSearch class="searchBar_inputlens" />
      </label>
      <input type="text" placeholder="Search for a city..." id="searchBar_input" >
      <TbCurrentLocation class="currentLocation_btn" />
    </div>
    <CustomSelect :countries='countries' />
  </div>
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
      const countries = ref([{name:'Venezuela',key:1}])
      return{countries}
    }
  })
</script>

<style scoped >
  .searchBar{
    position: relative;
    width: 100%;
    background-color: #000;
    top: 20%;
  }
  .searchBar_div{
    height: 4em;
    width: 80%;
    margin: 0 auto;
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
</style>