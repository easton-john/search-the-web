<template>
  <div>
    <h2>
      {{ article.title }}
    </h2>
    <h3>{{ article.publishedAt }}</h3>
    <h4>Author: {{article.author }}</h4>
    <p>Description: {{ article.description }} </p>
    <a :href="article.url">{{ article.url }} </a>
    <img :src="article.urlToImage">
  
    

  </div>
</template>

<script>
export default {
  
  props: ['article']

};

</script>

<style>

img {
  width: 300px;
}

</style>
