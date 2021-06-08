import Vue from 'vue'
import App from './App.vue'
import reg from './reg.vue'
Vue.config.productionTip = false
Vue.component('regi',reg);
new Vue({
  render: h => h(App),
}).$mount('#app')
