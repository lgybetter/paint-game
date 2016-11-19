<template>
  <div>
    <navgation></navgation>
    <div class="page-content">
      <div class="page-content-wrapper">
        <canvas id="canvas" class="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import navgation from '../components/navgation'
import * as types from '../store/mutation-types'

export default {
  components: {
    navgation
  },
  methods: {
    // drawLoop() {
    //   requestAnimFrame(drawLoop)
    //   this.$store.commit(types.DRAWING)
    // }
  },
  mounted() {
    this.$store.commit(types.CANVAS_INIT)
    // (this.drawLoop())()
  }

}

</script>

<style lang="less">
  .page-content {
    padding-top: 56px;
  }
  
  @media (min-width:480px) {
    .page-content {
      padding-top: 64px;
    }
  }
  
  .page-content-wrapper {
    padding-top: 48px;
    padding-right: 72px;
    padding-bottom: 48px;
    padding-left: 72px;
    .canvas {
      border: 1px solid black;
      background: white;
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
</style>