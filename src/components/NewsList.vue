<template>
  <div>
      <section>
        <Article
          v-for="article in news"
          :key="article.url"
          :article="article"
        />
      </section>

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

section {
  width: 50%;
}

</style>
