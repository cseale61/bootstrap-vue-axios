import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import { BootstrapVue, BootstrapVueIcons, ToastPlugin } from 'bootstrap-vue';
import './custom.scss';



Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(ToastPlugin);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
