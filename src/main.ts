/*
 * @Author: horyan
 * @Date: 2022-12-23 09:11:06
 * @LastEditTime: 2022-12-23 10:14:18
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/router/guards'
import '@/style/tailwind.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.config.errorHandler = (err, instance, info) => {
  console.log('vue errorHandler: ', err, instance, info)
}
app.mount('#app')
