import VueRouter from 'vue-router'
import homePage from '../pages/home'

const router = new VueRouter({
  base: 'paintGame/',
  routes: [
    {
      name: 'home',
      path: '/',
      component: homePage
    },
  ]
})

export default router