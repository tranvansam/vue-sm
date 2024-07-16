import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routers'
import { registerGlobalComponents } from './utils/importGlobal'
import './assets/css/reset.css'
import './assets/css/setting.css'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerGlobalComponents(app)
app.mount('#app')
