<template>
  <div id="app">
    <h1>News Search</h1>
    <SearchControl class="search" :onSearch="handleSearch"/>
    <NewsList class="articles" :news="news" />
  </div>
</template>

<script>
import SearchControl from './components/SearchControl';
import NewsList from './components/NewsList';
import { getNews } from '../services/api.js';

export default {
  data() {
    return {
      news: null
    };
  },

  components: {
    SearchControl,
    NewsList
  },

  methods: {
    handleSearch(name) {
      getNews(name).then(data => {
        this.news = data.articles;
      });
    }
  }

};
</script>

<style>

h1 {
  display: flex;
  justify-content: center;
}

.search {
  display: flex;
  justify-content: center;
}

.articles {
  display: flex;
  justify-content: space-around
}

</style>
