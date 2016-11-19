<template>
  <div>
    <navgation></navgation>
    <div class="page-content">
      <div class="page-content-wrapper">
        <div class="center-box">
          <canvas id="canvas" class="canvas"></canvas>
          <canvas id="show-canvas" class="canvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navgation from '../components/navgation'
import * as types from '../store/mutation-types'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    mousePos: 'mousePos',
    lastPos: 'lastPos',
    drawing: 'drawFlag'
  }),
  components: {
    navgation
  },
  methods: {

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
          border: 1px solid black;
          background: white;
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