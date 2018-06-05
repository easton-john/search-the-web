<template>
  <div>
    <h1>News List</h1>
      <ul>
        <Article 
          v-for="article in news"
          :key="article.source.id"
          :article="article"
        />
      </ul>

  </div>
</template>

<script>
import Article from './Article';

export default {
  props: ['news'],

  components: {
    Article
  }
};

</script>

<style>

</style>
