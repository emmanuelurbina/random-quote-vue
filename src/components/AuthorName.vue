<template>
  <div class="author-name">
    <h1>{{ $route.params.author }}</h1>
  </div>
</template>

<script>
export default {
  name: "AuthorName",
  props: ["quote"],
};
</script>


<style scoped>
.author-name {
  position: relative;
  cursor: pointer;
  width: 650px;
  padding-bottom: 2.5em;
  margin: auto;
  font-size: 24px;
  
}

@media screen and (max-width: 600px)  {
    .author-name {
        width: 100%;
        font-size: auto;
    }
}
</style>