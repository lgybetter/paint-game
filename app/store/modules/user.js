import * as types from '../mutation-types'

const state = {
  user: JSON.parse(sessionStorage.getItem('user')) || {}
}

const mutations = {
  [types.USER_ENTER](state, {user}) {
    sessionStorage.setItem('user', JSON.stringify(user))
    state.user = user
  },
  [types.USER_LEFT](state) {
    sessionStorage.removeItem('user')
    state.user = {}
  }
}

export default {
  state,
  mutations
}