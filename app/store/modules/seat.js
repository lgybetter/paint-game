import * as types from '../mutation-types'

const state = {
  seat: new Array
}

const mutations = {
  [types.SEAT_INIT](state) {
    for (let i = 0; i < 6; i++) {
      state.seat[i] = {
        userName: '',
        seatId: i
      }
    }
  },
  [types.USER_SIT](state, { user }) {
    var seat2 = new Array
    for (let i = 0; i < 6; i++) {
      if (i == user.seatId) {
        seat2[i] = {
          userName: user.userName,
          seatId: user.seatId
        }
      } else {
        seat2[i] = {
          userName: state.seat[i].userName,
          seatId: state.seat[i].seatId
        }
      }
    }
    state.seat = seat2
    // state.seat[user.seatId] = {
    //   userName: user.userName,
    //   seatId: user.seatId
    // }
  }
}

export default {
  state,
  mutations
}