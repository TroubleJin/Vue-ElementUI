import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () =>  import('../views/element/Layout'),
  },
  {
    path: '/pop',
    component: () =>  import('../views/element/Pop'),
  },
  {
    path: '/table',
    component: () =>  import('../views/element/Table'),
  },
  {
    path: '/form',
    component: () =>  import('../views/element/Form'),
  },
  {
    path: '/home/:id',
    name: 'home',
    component: () =>  import('../views/Home'),
    children: [{
      path: '/child',
      component: () => import('../views/Child')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
