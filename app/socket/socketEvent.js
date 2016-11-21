import * as types from '../store/mutation-types'

export default function (store) {
  return {
    connect: () => {
      console.log('socket connected')
    },
    user_enter_success: (user) => {
      store.commit(types.USER_ENTER, { user })
    },
    user_exit: (user) => {
      console.log("有玩家退出")
    },
    new_user_join: (user) => {
      store.commit(types.NEW_USER_ENTER, { user })
    },
    show_mouse_down: (data) => {

    },
    show_mouse_move: (data) => {
      store.commit(types.SHOW_MOUSE_MOVE, { mousePos: data.mousePos })
    },
    set_drawer: (data) => {
      console.log("set_drawer")
      store.commit(types.SET_DRAWER)
    },
    set_shower: (data) => {
      console.log("set_shower")
      store.commit(types.SET_SHOWER)
    }
  }
}