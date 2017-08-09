import Vue from 'vue';
import Router from 'vue-router';
import beforeEach from './beforeEach';
import { routes as app } from '../app/index';

Vue.use(Router);

const routes = [...app];

const router = new Router({
  routes,
  base: '/admin/',
  linkActiveClass: 'active',
  momde: 'history'
});

router.beforeEach(beforeEach);

export default router
