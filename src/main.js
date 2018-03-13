// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.use(VueResource)
// Configura de forma centralizada o caminho (path) para o servidor.
Vue.http.options.root = 'http://localhost:3000'

Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
