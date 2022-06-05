import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';

export const http = axios.create({
  baseURL: "http://localhost:8000"
});
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
