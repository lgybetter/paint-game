import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueSocketio from './vue-socket.io/Main'
import app from './app'
import router from './router/router'
import store from './store/index'
import * as types from './store/mutation-types'

Vue.use(Vuex)
Vue.use(VueSocketio, 'http://localhost:3000')
Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  sockets: {
    connect: () => {
      console.log('socket connected')
    },
    user_enter_success: (data) => {
      console.log("登陆成功")
    },
    user_exit: (data) => {
      console.log("有玩家退出")
    },
    new_user_join: (data) => {
      console.log("有新玩家加入")
    },
    show_mouse_down: (data) => {
      
    },
    show_mouse_move: (data) => {
      store.commit(types.SHOW_MOUSE_MOVE, { mousePos:data.mousePos })
    }
  },
  router,
  store,
  render: h => h(app)
}).$mount('#app')