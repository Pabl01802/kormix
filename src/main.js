import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import router from './router'
import withUUID from "vue-uuid";
import App from './App.vue'

const head = createHead()

const app = withUUID(createApp(App))

app.use(router)
app.use(head)

app.mount('#app')