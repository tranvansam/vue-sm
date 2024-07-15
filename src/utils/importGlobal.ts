import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app) {
  app.component(
    'default',
    defineAsyncComponent(() => import('../layouts/Default.vue'))
  )
}
