import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import EasySlider from 'vue-easy-slider'

Vue.config.productionTip = false

Vue.use(EasySlider)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
