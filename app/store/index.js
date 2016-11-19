import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'
import drawCanvas from './modules/drawCanvas'
import showCanvas from './modules/showCanvas'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user,
    drawCanvas,
    showCanvas
  }
})