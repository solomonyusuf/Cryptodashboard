import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory  } from 'vue-router';
import Dashboard1 from './components/Dashboard1.vue';
import Dashboard2 from './components/Dashboard2.vue';

const router = createRouter({
    history: createWebHistory(),  
    routes: [
      { path: '/', name: 'Dashboard1', component: Dashboard1 },
      { path: '/2', name: 'Dashboard2', component: Dashboard2 },
    ],
  });
  
  
  createApp(App).use(router).mount('#app')
