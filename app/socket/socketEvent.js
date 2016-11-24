import * as types from '../store/mutation-types'

export default function (store, router) {
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
      router.replace({ path: '/room' })
      // store.commit(types.DRAW_CANVAS_INIT)
      // store.commit(types.SHOW_CANVAS_INIT)
      // store.commit(types.CLEAR_CANVAS)
      store.commit(types.SET_DRAWER)
    },
    set_shower: (data) => {
      router.replace({ path: '/room' })
      // store.commit(types.DRAW_CANVAS_INIT)
      // store.commit(types.SHOW_CANVAS_INIT)
      // store.commit(types.CLEAR_CANVAS)
      store.commit(types.SET_SHOWER)
    },
    shower_clear_canvas: (data) => {
      store.commit(types.CLEAR_SHOW_CANVAS)
    },
    new_user_sit: ({ index, user, seatLastId }) => {
      store.commit(types.NEW_USER_SIT, { index, user, seatLastId })
    }
  }
}