<template>
  <main>
    <SearchBar />
    <SavedCities />
  </main>
</template>

<script lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import SavedCities from '@/components/SavedCities.vue';
  import {defineComponent} from 'vue';

  export default defineComponent({
    components:{
      SearchBar,
      SavedCities
    }
  })

</script>


<style scoped >
  main{
    width: 100%;
    min-height: 100vh;
  }
</style>