import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory  } from 'vue-router';
import Dashboard1 from './components/Dashboard1.vue';

const router = createRouter({
    history: createWebHistory(),  
    routes: [
      { path: '/', name: 'Dashboard1', component: Dashboard1 },
    ],
  });
  
  
  createApp(App).use(router).mount('#app')
