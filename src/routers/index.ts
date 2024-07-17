import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const Home = () => import('../views/Home.vue')
const store = () => import('../views/Store.vue')
const component = (component: any) => {
  return defineAsyncComponent({
    loader: () => component(),
    loadingComponent: () => import('../components/commons/Loading.vue'),
    delay: 200,
    errorComponent: () => import('../components/commons/Error.vue'),
    timeout: 3000,
  })
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: component(Home),
      meta: {
        layout: 'default',
        title: 'Ảo thuật bảo lam',
      },
    },
    {
      path: '/store',
      name: 'store',
      component: component(store),
      meta: {
        layout: 'default',
        title: 'Cửa hàng ảo thuật',
      },
    },
  ],
})
router.beforeEach((to, from, next) => {
  document.title = String(to?.meta?.title) || 'Ảo thuật bảo lam'
  next()
})
export default router
