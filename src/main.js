import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import { routes } from "./router/index.js";
import Home from './components/Home.vue';
import CallList from './components/CallList.vue';
import CallRecord from './components/CallRecord.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

// const Page1 = { template: '<div>Page1</div>' }
// const Page2 = { template: '<div>Page2</div>' }

// const routes = [
//   { path: '/page1', component: Page1 },
//   { path: '/page2', component: Page1 }
// ]

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
}).$mount('#app')
