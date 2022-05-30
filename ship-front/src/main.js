import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

const app = createApp(App)

app.use(router)

app.mount('#app')
