import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

export const http = axios.create();

const app = createApp(App)

app.use(router)

app.mount('#app')
