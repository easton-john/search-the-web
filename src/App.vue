<template>
  <div id="app">
    <CocktailList :drinks="drinks" />
  </div>
</template>

<script>
import CocktailList from './components/CockTailList.vue';
import { getCocktailName } from '../services.api.js';

export default {
  data() {
    return {
      drinks: null
    };
  },

  components: {
    CocktailList
  },

  methods: {
    handleSearch() {
      getCocktailName(name).then(data => {
        this.drinks = data.drinks;
      });
    }

  }

};
</script>

<style>

</style>
