<template>
  <div>
    <navgation></navgation>
    <div class="page-content">
      <div class="page-content-wrapper">
        <div class="center-box">
          <canvas v-show="drawerState" id="canvas" class="canvas"></canvas>
          <canvas v-show="!drawerState" id="show-canvas" class="canvas"></canvas>
        </div>
        <snackbar v-if="snackbar" :message="message" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar" />
        <raisedButton label="开始游戏" primary fullWidth v-on:click="startGame"/>
      </div>
    </div>
  </div>
</template>

<script>
import navgation from '../components/navgation'
import badge from 'muse-components/badge'
import raisedButton from 'muse-components/raisedButton'
import chip from 'muse-components/chip'
import snackbar  from 'muse-components/snackbar'
import * as types from '../store/mutation-types'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    mousePos: 'mousePos',
    lastPos: 'lastPos',
    drawerState: 'drawerState',
    drawing: 'drawFlag',
    userName: 'userName',
    usersNumber: 'usersNumber',
    newUserName: 'newUserName'
  }),
  data() {
    return {
      snackbar: false,
      message: '',
      test: false
    }
  },
  components: {
    navgation,
    raisedButton,
    snackbar,
    badge,
    chip
  },
  methods: {
    showSnackbar () {
      this.message = this.newUserName + "玩家加入游戏"
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 5000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    startGame() {
      this.$socket.emit('start_game')
    }
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
    usersNumber: function() {
      this.showSnackbar()
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