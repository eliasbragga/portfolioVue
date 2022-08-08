import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueScrollReveal from 'vue-scroll-reveal';
import VueTilt from 'vue-tilt.js'

Vue.use(VueTilt)

Vue.config.productionTip = false
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '200px',
  mobile: false
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
