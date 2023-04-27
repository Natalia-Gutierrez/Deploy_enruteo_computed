import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import ContactosView from "./components/ContactosView.vue";
import Computed from "./components/Computed.vue";
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/HomeView",
      component: HomeView,
    },
    {
      path: "/ContactosView",
      component: ContactosView,
    },
    {
      path: "/Computed",
      component: Computed,
    },
  ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')