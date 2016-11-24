import * as types from '../mutation-types'

const state = {
  seat: new Array,
  seatLastId: -1
}

const mutations = {
  [types.SEAT_INIT](state) {
    for (let i = 0; i < 6; i++) {
      state.seat[i] = {
        userName: '',
        seatState: true
      }
    }
  },
  [types.USER_SIT](state, { index, user}) {
    var seat2 = new Array
    for (let i = 0; i < 6; i++) {
      seat2[i] = state.seat[i]
    }
    seat2[index] = {
      userName: user.userName,
      seatState: user.seatState
    }
    if(state.seatLastId !== -1 && state.seatLastId !== index) {
      seat2[state.seatLastId] = {
        userName: '',
        seatState: true
      }
    }
    state.seatLastId = index
    state.seat = seat2
  },
  [types.NEW_USER_SIT](state, { index, user, seatLastId }) {
    var seat2 = new Array
    for(let i = 0; i < 6; i++) {
      seat2[i] = state.seat[i]
    }
    seat2[index] = {
      userName: user.userName,
      seatState: user.seatState
    }
    if(seatLastId !== -1 && seatLastId !== index) {
      seat2[seatLastId] = {
        userName: '',
        seatState: true
      }
    }
    state.seat = seat2
  }
}

export default {
  state,
  mutations
}