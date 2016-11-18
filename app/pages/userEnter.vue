<template>
  <div>
    <div class="page-content">
      <div class="page-content-wrapper"> 
        <textFieldLabel labelFloat label="请输入你的昵称" type="text" v-model="inputText" fullWidth/>
        <raisedButton label="进入游戏" primary fullWidth/>
      </div>
    </div>
  </div>
</template>

<script>
import textFieldLabel from 'muse-components/textField'
import raisedButton from 'muse-components/raisedButton'

export default {
  components: {
    textFieldLabel,
    raisedButton
  },
  data() {
    return {
      inputText:''
    }
  },
  methods: {
    test() {
      console.log(this.input)
    }
  }
}

</script>