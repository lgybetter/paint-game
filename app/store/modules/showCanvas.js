import * as types from '../mutation-types'

const state = {
  canvas: null,
  ctx: null,
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
  [types.SHOW_CANVAS_INIT](state, el) {
    state.canvas = document.getElementById(el)
    state.canvas.width = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availWidth * 0.8 : window.screen.availWidth * 0.6
    state.canvas.height = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availHeight * 0.35 : window.screen.availHeight * 0.4
    state.ctx = state.canvas.getContext('2d')
  },
  [types.SHOW_MOUSE_MOVE](state, { mousePos }) {
    state.mousePos = mousePos
    state.ctx.beginPath()
    state.ctx.moveTo(state.lastPos.x, state.lastPos.y)
    state.ctx.lineTo(state.mousePos.x, state.mousePos.y)
    state.ctx.lineWidth = 1.0
    state.ctx.strokeStyle = '#CC0000'
    state.ctx.stroke()
    state.lastPos = state.mousePos
  },
  [types.SHOW_MOUSE_DOWN](state, { lastPos }) {
    state.lastPos = lastPos
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
    state.lastPos = state.mousePos
  },
  [types.CLEAR_SHOW_CANVAS](state) {
    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
  }
}

export default {
  state,
  mutations
}