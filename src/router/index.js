import Vue from 'vue'
import VueRouter from 'vue-router'
import RandomQuote from '../views/RandomQuote.vue'
import AuthorQuotes from '../views/AuthorQuotes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Random',
    component: RandomQuote
  },
  {
    path: '/quotes-author/:author',
    name: 'quotes-author',
    component: AuthorQuotes
  }
] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
