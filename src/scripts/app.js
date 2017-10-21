import Vue from 'vue'

import VueRouter from 'vue-router'

import "styles/app.scss"

import routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

new Vue({
  router
}).$mount('#root')