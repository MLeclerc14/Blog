
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { sync } from 'vuex-router-sync';
import VueMaterial from 'vue-material';
import Vue from 'vue';
import Root from './Root';

// Import shared components
import PageContent from './components/PageContent';
import Sidenav from './components/Sidenav';

// Register shared components
Vue.component('page-content', PageContent);
Vue.component('sidenav', Sidenav);

/**
 * This is the Vuex store and it is
 * avaible to all your components
 */
import store from './vuex';

/**
 * This is the Router
 */
import router from './router';

/**
 * Vue Material
 */
Vue.use(VueMaterial)


/**
 * Keep vue-router and vuex store in sync.*
 * https://github.com/vuejs/vuex-router-sync/tree/next
 */
sync(store, router);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


let app = new Vue({
  store, // injects the Store into all components
  router, // make Router work with the application
  el: '#app',
  render: h => h(Root)
});

// https://forum.vuejs.org/t/structuring-very-large-applications/840/3 structuring project
