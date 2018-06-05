<template>
  <form @submit.prevent="onSearch(search)">
    <input value v-model="search" placeholder="enter keyword"/>
    <button type="submit">Search</button>
  </form>

</template>

<script>

export default {
  data() {
    return { search: '' };
  },

  props: {
    onSearch: {
      type: Function,
      required: true
    }
  }
};

</script>

<style>

input {
  font-size: 1.5em;
}

button {
  font-size: 1.5em;
}

</style>
