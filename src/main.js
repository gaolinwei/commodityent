import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from "./router"
import store from './store'

import 'normalize.css'
import './styles/index.less'

import { globalMixin } from './mixins/globalMixin';
Vue.mixin(globalMixin)

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
