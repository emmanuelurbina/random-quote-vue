<template>
  <div class="quoteText">
    <p>
      {{ quote.quoteText }}
    </p>
  </div>
</template>


<script>
export default {
  name: "QuoteComponent",
  props: ["quote"],
};
</script>

<style scoped>
.quoteText {
  border-left: 11px solid slateblue;
  padding: 4em 2.5em;
  width: 700px;
  margin: 1em auto;
  font-size: 24px;
  font-weight: 700;
}

@media screen and (max-width: 600px)  {
    .quoteText {
        width: 100%;
        font-size: 16px;
    }
}
</style>