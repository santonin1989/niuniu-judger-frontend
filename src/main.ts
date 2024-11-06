import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'

const app = createApp(App)

app.use(router)
app.use(PerfectScrollbarPlugin)

app.mount('#app')

if (import.meta.env.DEV) {
  document.title = document.title + '(DEV)'
}
