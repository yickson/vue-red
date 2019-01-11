import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import * as uiv from 'uiv'
import Chart from 'vue-chartjs'
import Vuetabs from 'vue-nav-tabs'
import VueCarousel from 'vue-carousel'
import VueChartkick from 'vue-chartkick'
import jsPDF from 'jspdf'
import VueSwal from 'vue-swal'
import VeeValidate from 'vee-validate'

// Don't warn about using the dev version of Vue in development
Vue.use(uiv)
Vue.use(Chart)
Vue.use(Vuetabs)
Vue.use(VueCarousel)
Vue.use(VueChartkick)
Vue.use(jsPDF)
Vue.use(VueSwal)
const VueValidationEs = require('vee-validate/dist/locale/es')
Vue.use(VeeValidate, {
  events: '',
  locale: 'es',
  dictionary: {
    es: VueValidationEs,
  },
})
Vue.config.productionTip = process.env.NODE_ENV === 'production'

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// If running inside Cypress
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`
  window.__app__ = app
}
