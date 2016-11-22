import VueRouter from 'vue-router'
import homePage from '../pages/home'
import userEnterPage from '../pages/userEnter'
import roomPage from '../pages/room'

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
    },
    {
      name: 'room',
      path: '/room',
      component: roomPage
    }
  ]
})

export default router