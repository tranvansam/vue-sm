import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app : any) {
  app.component(
    'default',
    defineAsyncComponent(() => import('../layouts/Default.vue'))
  )
}
