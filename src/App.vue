<template>
  <div id="app">
    <NewsList :news="news" />
    <SearchControl :onSearch="handleSearch"/>
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

</style>
