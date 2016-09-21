import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';

import App from './App';
import Welcome from './components/Welcome.vue';
import DashBoard from './components/DashBoard.vue';
import Application from './components/Application.vue';
import SignIn from './components/SignIn.vue';

import 'bootstrap/less/bootstrap.less';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);

const router = new VueRouter();
router.map({
  '/index': {
    component: Welcome,
  },
  '/app': {
    component: DashBoard,
  },
  '/app/user/:userId': {
    name: 'application',
    component: Application,
  },
  '/session': {
    component: SignIn,
  },
});
router.redirect({
  '*': '/index',
});
router.start(App, 'app');