export default {
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
    store.commit(types.SHOW_MOUSE_MOVE, { mousePos: data.mousePos })
  }
}