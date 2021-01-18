import Vue from 'vue'
import VueRouter from './vue-router.vue'

import App from './App.vue'
Vue.config.productionTip = false

const routes = [
  { path: '/', component: App },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
