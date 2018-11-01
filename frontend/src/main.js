import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import './plugins/element.js';
import router from './router/index.js';
import VueSocketio from 'vue-socket.io';
import root_url from '../config/http_root_url';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueSocketio, root_url);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
