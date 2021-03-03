import {
  createRouter,
  createWebHistory
} from 'vue-router';

import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
});

export default router;
