import Vue from 'vue'
import App from './index.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')