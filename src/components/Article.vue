<template>
  <div class="article">
    <h2>{{ article.title }} </h2>
    <h3 class="author">By: {{article.author }}</h3>
    <h4>{{ article.publishedAt }}</h4>
    <p><b>Description:</b> {{ article.description }} <a :href="article.url">Read More</a> </p>
    <img :src="article.urlToImage">

  </div>
</template>

<script>
export default {
  
  props: ['article']

};

</script>

<style>

.article {
  background: whitesmoke;
  border-radius: 10px;
  padding: .5em;
  margin-bottom: 10px;
}

.author {
  font-size: 1em;
}

img {
  width: 250px;
  float: center;
}

</style>
