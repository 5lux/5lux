import Vue from 'vue/dist/vue'

import Index from './pages/shopIndex.vue'

import shop from './pages/shopIndexStore.vue';

new Vue({
  el: '#root',
  components: {
    Index: Index,
    shop: shop
  }
})