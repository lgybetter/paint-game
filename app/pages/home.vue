<template>
 <bottomNav :value="bottomNav" shift @change="handleChange">
    <bottomNavItem value="movies" title="Movies" icon="ondemand_video"/>
    <bottomNavItem value="music" title="Music" icon="music_note"/>
    <bottomNavItem value="books" title="Books" icon="books"/>
    <bottomNavItem value="pictures" title="Pictures" icon="photo"/>
</bottomNav>
</template>

<script>
import 'muse-components/styles/base.less' // 全局样式包含 normalize.css
import appbar from 'muse-components/appbar'
import avatar from 'muse-components/avatar'
import {bottomNav, bottomNavItem} from 'muse-components/bottomNav'
import {retina} from 'muse-components/utils'

export default {
  data () {
    return {
      bottomNav: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  },
  components: {
    appbar,
    avatar,
    bottomNav,
    bottomNavItem
  },
  created() {
    retina()
  }
}
</script>