import VueRouter from 'vue-router'
import homePage from '../pages/home'
import userEnterPage from '../pages/userEnter'

const router = new VueRouter({
  base: 'paintGame/',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: homePage
    },
    {
      name: 'userEnter',
      path: '/',
      component: userEnterPage
    }
  ]
})

export default router