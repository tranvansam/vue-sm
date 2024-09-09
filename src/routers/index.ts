import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Home from "../views/Home.vue"
import store from "../views/Store.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      meta: {
        layout: 'default',
        title: 'Ảo thuật bảo lam',
      },
    },
    {
      path: '/store',
      name: 'store',
      component: store,
      meta: {
        layout: 'default',
        title: 'Cửa hàng ảo thuật',
      },
    }
  ],
})
router.beforeEach((to, from, next) => {
  document.title = String(to?.meta?.title) || 'Ảo thuật bảo lam'
  next()
})
export default router
