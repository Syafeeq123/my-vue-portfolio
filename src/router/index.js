import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ParallaxPage from '../views/ParallaxPage.vue'; // new wrapper view
import dashboard from '../pages/master/dashboard.vue';
import profile from '../pages/profile.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/profile', name: 'Profile', component: profile },
  { path: '/dashboard', name: 'Dashboard', component: dashboard },
  { path: '/home', name: 'Home', component: Home },
  { path: '/parallax', name: 'Parallax', component: ParallaxPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
