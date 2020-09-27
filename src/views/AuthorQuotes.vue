<template>
  <section>
    <nav class="nav">
      <div class="right-i">
        <ul class="navigation">
          <li>
            <a class="link-item" href="/"> Random <i class="fas fa-random"></i> </a>
          </li>
        </ul>
      </div>
    </nav>
    <AuthorName />
    <QuoteComponent
      v-for="(quote, index) in quotes"
      v-bind:quote="quote"
      v-bind:key="index"
    />
    <FooterComponent />
    <nprogress-container></nprogress-container>
  </section>
</template>

<script>
import NprogressContainer from "vue-nprogress/src/NprogressContainer";
import GetQuotesAuthor from "../authors.js";
import QuoteComponent from "../components/QuoteComponent.vue";
import AuthorName from "../components/AuthorName.vue";
import FooterComponent from "../components/FooterComponent.vue"
export default {
  name: "AuthorQuotes",
  data() {
    return {
      quotes: [],
    };
  },
  components: { NprogressContainer, QuoteComponent, AuthorName, FooterComponent },
  methods: {
    setQuotes: function () {
      GetQuotesAuthor(this.$route.params.author).then((resp) => {
        this.quotes = resp.quotes;
      });
    },
  },
  created: function () {
    this.author = this.$route.params.author;
    this.setQuotes();
  },
};
</script>