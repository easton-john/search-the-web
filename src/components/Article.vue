<template>
  <div>
    <h2>
      {{ article.title }}
    </h2>
    <h3>By: {{article.author }}</h3>
    <h4>{{ article.publishedAt }}</h4>
    <p>Description: {{ article.description }} <a :href="article.url">Read More</a> </p>
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
  width: 250px;
  float: center;
}

</style>
