import Vue from 'vue';
import Router from 'vue-router';
import { routes as app } from '../app';

Vue.use(Router);

const routes = [...app];

const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router
