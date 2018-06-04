<template>
  <div>
    <h1>Drink List</h1>
      <ul>
        <Drink 
          v-for="drink in drinks"
          :key="drink.idDrink"
          :drink="drink"
        />
      </ul>

  </div>
</template>

<script>
import Drink from '.Drink';

export default {
  props: ['drinks'],

  components: {
    Drink
  }
};

</script>

<style>

</style>
