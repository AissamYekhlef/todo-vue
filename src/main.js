import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Projects from './components/Projects'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: App },
  { path: '/projects', component: Projects },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
