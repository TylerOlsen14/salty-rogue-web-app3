import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import CallList from './components/CallList.vue'
import CallRecord from './components/CallRecord.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
