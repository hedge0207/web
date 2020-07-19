import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '../views/A.vue'
import B from '../views/B.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path:'/A',
    name:'A',
    component:A
  },
  {
    path:'/B',
    name:'B',
    component:B
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
