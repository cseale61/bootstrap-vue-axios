import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import { BootstrapVue, BootstrapVueIcons, ToastPlugin } from 'bootstrap-vue';
import './custom.scss';


// Create http prototype for API calls - ex. this.$http.get(url, options)
Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(ToastPlugin);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
