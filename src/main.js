import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import './crud/projects/operations'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
