<template>
  <div class="authorInfo" @click="getByAuthor(quote.quoteAuthor)">
    <p class="authorName">{{ quote.quoteAuthor }}</p>
    <p class="genre">{{ quote.quoteGenre }}</p>
    <p class="icono"><i class="fas fa-long-arrow-alt-right"></i></p>
  </div>
</template>

<script>
export default {
  name: "InfoQuote",
  props: ["quote"],
  methods: {
    getByAuthor: function (name) {
      this.$router.push({
        name: "quotes-author",
        params: { author: name },
      });
    },
  },
};
</script>


<style scoped>
.authorInfo {
  position: relative;
  cursor: pointer;
  padding: 2em;
  width: 650px;
  margin: 1.5em auto;
  font-size: 20px;
  font-weight: bold;
}

.authorInfo:hover {
  color: white;
  background-color: #2d2e2e;
}

.authorInfo:hover .genre {
  color: #7d7d7d;
}
.authorInfo:hover .icono {
  display: inline;
}
.genre {
  text-transform: capitalize;
  color: #424242;
}

.icono {
    display:none;
    position: absolute;
    top: 2.6em;
    right: 1em;
    
}

@media screen and (max-width: 600px)  {
    .authorInfo {
        width: 100%;
        font-size: auto;
    }
}
</style>