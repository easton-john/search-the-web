<template>
  <form @submit.prevent="onSearch(search)">
    <input v-model="search" placeholder="enter keyword"/>
    <button type="submit">Search</button>
  </form>

</template>

<script>

export default {
  data() {
    return { search: 'alchemy' };
  },

  created() {
    this.onSearch(this.search);
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

form {
  margin-bottom: 1em;
}

input {
  font-size: 1.5em;
  padding-left: .30em; 
  margin: 0px;
  border-right: none;
  margin-bottom: 10px;
}

button {
  font-size: 1.5em;
  margin: 0px;
  margin-bottom: 10px;
}

</style>
