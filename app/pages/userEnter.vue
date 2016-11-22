<template>
  <div>
    <div class="page-content">
      <div class="page-content-wrapper">
        <textFieldLabel labelFloat label="请输入你的昵称" type="text" v-model="userName" fullWidth/>
        <raisedButton label="进入游戏" primary fullWidth v-on:click="test" />
      </div>
    </div>
  </div>
</template>

<script>
import textFieldLabel from 'muse-components/textField'
import raisedButton from 'muse-components/raisedButton'
import { mapActions } from 'vuex'

export default {
  
  components: {
    textFieldLabel,
    raisedButton
  },
  data() {
    return {
      userName:''
    }
  },
  methods: {
    test() {
      this.$socket.emit('user_enter', this.userName)
      this.$router.replace({path: '/home'})
    }
  }
}

</script>