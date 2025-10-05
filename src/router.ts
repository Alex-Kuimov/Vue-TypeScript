import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('./pages/MainPage.vue')
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('./pages/StatPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;