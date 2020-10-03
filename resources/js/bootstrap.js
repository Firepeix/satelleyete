import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router'

import 'vuetify/dist/vuetify.min.css'
import Router from './routes/router';
window._ = require('lodash');
Vue.prototype.$axios = require('axios');
Vue.use(Vuetify);
Vue.use(VueRouter)
Vue.prototype.$axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const router = new Router();
new Vue({
    el: '#app',
    router: router.vueRouter,
    vuetify: new Vuetify()
})
