<template>
  <div>
    <navgation></navgation>
    <div class="page-content">
      <div class="page-content-wrapper">
        <list>
          <subHeader>玩家座位</subheader>
          <divider/>
          <template v-for="(user, index) in seat">
            <listItem :title="user.userName" v-on:click="sit(index, user)">
              <avatar src="./js/20cfec7259143037b09641a814e3f0c3.jpg" slot="leftAvatar"/>
              <icon slot="right" value="star_border">
            </listitem>
            <divider/>
          </template>
          <divider/>
        </list>
        <snackbar v-if="snackbar" :message="message" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar" />
        <raisedButton label="开始游戏" primary fullWidth v-on:click="startGame"/>
      </div>
    </div>
  </div>
</template>

<script>
import navgation from '../components/navgation'
import avatar_1 from '../../public/assets/images/avatar_1.jpg'
import avatar from 'muse-components/avatar'
import icon from 'muse-components/icon'
import raisedButton from 'muse-components/raisedButton'
import snackbar  from 'muse-components/snackbar'
import subHeader from 'muse-components/subHeader'
import divider from 'muse-components/divider'
import { list, listItem } from 'muse-components/list'
import * as types from '../store/mutation-types'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    userName: 'userName',
    usersNumber: 'usersNumber',
    newUserName: 'newUserName',
    seat: 'seat'
  }),
  created() {
    this.$store.commit(types.SEAT_INIT)
  },
  data() {
    return {
      snackbar: false,
      message: '',
      avatar_1,
    }
  },
  components: {
    avatar,
    icon,
    navgation,
    raisedButton,
    snackbar,
    subHeader,
    divider,
    list,
    listItem
  },
  methods: {
    sit(index, user) {
      user.userName = this.userName
      this.$store.commit(types.USER_SIT, { index, user })
    },
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
    startGame() {
      this.$socket.emit('start_game')
    },
  },
  watch: {
    usersNumber: function() {
      this.showSnackbar(this.newUserName + "玩家加入游戏")
    },
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