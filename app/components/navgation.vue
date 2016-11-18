<template>
  <div>
    <div class="header">
      <appbar title="你画，我就猜">
        <iconButton icon='menu' slot="left" v-on:click="toggle(true)"/>
        <iconButton icon='expand_more' slot="right"/>
      </appbar>
    </div>
    <div class="footer">
      <bottomNav :value="bottomNav" shift @change="handleChange">
        <bottomNavItem value="movies" title="Movies" icon="ondemand_video" />
        <bottomNavItem value="music" title="Music" icon="music_note" />
        <bottomNavItem value="books" title="Books" icon="books" />
        <bottomNavItem value="pictures" title="Pictures" icon="photo" />
      </bottomNav>
    </div>
    <drawer :open="open" :docked="docked" @close="toggle()">
      <list @itemClick="docked ? '' : toggle()">
        <listItem title="Menu Item 1"/>
        <listItem title="Menu Item 2"/>
        <listItem title="Menu Item 3"/>
      </list>
    </drawer>
  </div>
</template>

<script>
import appbar from 'muse-components/appbar'
import avatar from 'muse-components/avatar'
import iconButton from 'muse-components/iconButton'
import { bottomNav, bottomNavItem } from 'muse-components/bottomNav'
import drawer from 'muse-components/drawer'
import { list, listItem } from 'muse-components/list'
import {retina} from 'muse-components/utils'


export default {
  data () {
    return {
      bottomNav: 'movies',
      open: false,
      docked: true
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    toggle(flag) {
      this.open = !this.open,
      this.docked = !flag
    }
  },
  components: {
    appbar,
    avatar,
    bottomNav,
    bottomNavItem,
    drawer,
    iconButton,
    list,
    listItem
  },
  created() {
    retina()
  }
}
</script>

<style lang="less">
.footer {
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.header {
  overflow: hidden;
  position: fixed;
  top: 0px;
  width: 100%;
}
</style>