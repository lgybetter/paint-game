import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueSocketio from './vue-socket.io/Main'
import app from './app'
import router from './router/router'
import store from './store/index'
import socketEvent from './socket/socketEvent'
import * as types from './store/mutation-types'

Vue.use(Vuex)
Vue.use(VueSocketio, 'http://localhost:3000')
Vue.use(VueRouter)

new Vue({
  sockets: socketEvent(store, router),
  router,
  store,
  render: h => h(app)
}).$mount('#app')