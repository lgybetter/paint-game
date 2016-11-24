<template>
  <div>
    <navgation></navgation>
    <div class="page-content">
      <div class="page-content-wrapper">
        <div class="center-box">
          <canvas v-show="drawerState" id="canvas" class="canvas"></canvas>
          <canvas v-show="!drawerState" id="show-canvas" class="canvas"></canvas>
        </div>
        <raisedButton label="绘画结束" primary fullWidth v-on:click="changeDrawer" />
        <snackbar v-if="snackbar" :message="message" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar" />
        <floatButton v-show="drawerState" mini secondary icon="clear" class="float-button" v-on:click="clearCanvas" />
      </div>
    </div>
  </div>
</template>

<script>
import navgation from '../components/navgation'
import floatButton from 'muse-components/floatButton'
import snackbar  from 'muse-components/snackbar'
import raisedButton from 'muse-components/raisedButton'
import * as types from '../store/mutation-types'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    mousePos: 'mousePos',
    lastPos: 'lastPos',
    drawerState: 'drawerState',
    drawing: 'drawFlag',
    userName: 'userName',
    curSeatId: 'curSeatId'
  }),
  data() {
    return {
      snackbar: false,
      message: '',
    }
  },
  components: {
    navgation,
    snackbar,
    floatButton,
    raisedButton
  },
  methods: {
    showSnackbar (message) {
      this.message = message
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 5000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    clearCanvas() {
      this.$store.commit(types.CLEAR_DRAW_CANVAS)
      this.$socket.emit('clear_canvas')
    },
    changeDrawer() {
      console.log(1)
      this.$socket.emit('change_drawer', this.curSeatId)
    }
  },
  created() {
    console.log(this.drawerState)
  },
  mounted() {
    this.$store.commit(types.DRAW_CANVAS_INIT, 'canvas')
    this.$store.commit(types.SHOW_CANVAS_INIT, 'show-canvas')
  },
  watch: {
    mousePos: function() {
      this.$socket.emit('drawer_mouse_move', {
        lastPos: this.lastPos,
        mousePos: this.mousePos
      })
    },
    drawerState: function() {
      this.showSnackbar("玩家开始绘画")
      console.log(this.drawerState)
    }
  }
}

</script>

<style lang="less">
  .page-content {
    padding-top: 56px;
    .page-content-wrapper {
      padding-top: 48px;
      padding-right: 72px;
      padding-bottom: 48px;
      padding-left: 72px;
      .center-box {
        margin: 0 auto;
        text-align: center;
        .canvas {
          border-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
          background: #fff9c4;
        }
      }
      .float-button {
        position: fixed;
        bottom: 65px;
        right: 16px;
      }
    }
    @media (max-width: 993px) {
      .page-content-wrapper {
        padding-top: 24px;
        padding-right: 36px;
        padding-bottom: 24px;
        padding-left: 36px;
      }
    }
  }
  
  @media (min-width:480px) {
    .page-content {
      padding-top: 64px;
    }
  }
</style>