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
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./pages/RegistrationPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/LoginPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;