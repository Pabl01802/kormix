import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import router from './router'
import App from './App.vue'

const head = createHead()

const app = createApp(App)

app.use(router)
app.use(head)

app.mount('#app')