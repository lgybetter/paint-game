<template>
  <div>
    <navgation></navgation>
    <div class="page-content">
      <div class="page-content-wrapper">
        
      </div>
    </div>
  </div>
</template>

<script>
import navgation from '../components/navgation'

export default {
  components: {
    navgation
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