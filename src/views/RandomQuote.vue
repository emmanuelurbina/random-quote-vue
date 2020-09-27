<template>
  <section>
    <nav class="nav">
      <div class="right-i">
        <ul class="navigation">
          <li >
            <span class="link-item" @click="setQuote"> Random <i class="fas fa-random"></i> </span>
          </li>
        </ul>
      </div>
    </nav>
    <QuoteComponent :quote="quote" />
    <InfoQuote :quote="quote" />
    <FooterComponent />
  </section>
</template>

<script>
import GetQuote from "../random.js"
import QuoteComponent from "../components/QuoteComponent.vue"
import InfoQuote from "../components/InfoQuote.vue"
import FooterComponent from "../components/FooterComponent.vue"
export default {
    name:"RandomQuote",
    data(){
        return {
        quote:{}
    }
    },
    components:{
        QuoteComponent,
        InfoQuote,
        FooterComponent
    },
    methods: {
      setQuote: function(){
          GetQuote()
          .then(resp => {
              this.quote = resp.quote
          })
      }
    },
    created: function() {
        this.setQuote()
    }
}
</script>