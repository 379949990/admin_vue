import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import SideBar from '../components/SideBar'
import PageHead from '../components/PageHead'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/admin',
    name: 'admin',
    components: {
      default: () => import('../views/admin/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  },
  {
    path: '/goods',
    name: 'goods',
    components: {
      default: () => import('../views/goods/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: () => import('../views/user/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: () => import('../views/cart/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  },
  {
    path: '/order',
    name: 'order',
    components: {
      default: () => import('../views/order/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  },
  {
    path: '/message',
    name: 'message',
    components: {
      default: () => import('../views/message/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  },
  {
    path: '/banner',
    name: 'banner',
    components: {
      default: () => import('../views/banner/index.vue'),
      sideBar: SideBar,
      pageHead: PageHead
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
