import * as types from '../mutation-types'

const state = {
  canvas: null,
  ctx: null,
  drawing: false,
  mousePos: {
    x: 0,
    y: 0
  },
  lastPos: {
    x: 0,
    y: 0
  }
}

const mutations = {
  [types.DRAW_CANVAS_INIT](state, el) {
    state.canvas = document.getElementById(el)
    state.canvas.width = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availWidth * 0.8 : window.screen.availWidth * 0.6
    state.canvas.height = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availHeight * 0.35 : window.screen.availHeight * 0.4
    state.ctx = state.canvas.getContext('2d')
    var rect = state.canvas.getBoundingClientRect();
    // Prevent scrolling when touching the canvas
    document.body.addEventListener("touchstart", function (e) {
      if (e.target == state.canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchend", function (e) {
      if (e.target == state.canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchmove", function (e) {
      if (e.target == state.canvas) {
        e.preventDefault();
      }
    }, false);
    state.canvas.addEventListener('mousedown', (e) => {
      state.drawing = true
      state.lastPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      state.mousePos = {
        x: state.lastPos + 1,
        y: state.mousePos + 1
      }
      state.ctx.beginPath()
      state.ctx.moveTo(state.lastPos.x, state.lastPos.y)
      state.ctx.lineTo(state.mousePos.x, state.mousePos.y)
      state.ctx.lineWidth = 1.0
      state.ctx.strokeStyle = '#CC0000'
      state.ctx.stroke()
      // this.$socket.emit('drawer_mouse_down', {
      //   lastPos: state.lastPos,
      //   mousePos: state.mousePos
      // })
      state.lastPos = state.mousePos
    }, false)
    state.canvas.addEventListener('mouseup', (e) => {
      state.drawing = false
    }, false)
    state.canvas.addEventListener('mousemove', (e) => {
      state.mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      if (state.drawing) {
        state.ctx.beginPath()
        state.ctx.moveTo(state.lastPos.x, state.lastPos.y)
        state.ctx.lineTo(state.mousePos.x, state.mousePos.y)
        state.ctx.lineWidth = 1.0
        state.ctx.strokeStyle = '#CC0000'
        state.ctx.stroke()
        // this.$socket.emit('drawer_mouse_move', {
        //   lastPos: state.lastPos,
        //   mousePos: state.mousePos
        // })
        state.lastPos = state.mousePos
      }
    }, false)

    state.canvas.addEventListener("touchstart", function (e) {
      state.mousePos = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      }
      var touch = e.touches[0]
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      state.canvas.dispatchEvent(mouseEvent)
    }, false)
    state.canvas.addEventListener("touchend", (e) => {
      var mouseEvent = new MouseEvent("mouseup", {})
      state.canvas.dispatchEvent(mouseEvent)
    }, false)
    state.canvas.addEventListener("touchmove", (e) => {
      var touch = e.touches[0]
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      state.canvas.dispatchEvent(mouseEvent)
    }, false)
  },
  [types.CLEAR_DRAW_CANVAS](state) {
    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
  }
}

export default {
  state,
  mutations
}