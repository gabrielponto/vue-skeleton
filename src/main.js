import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueDebounce from 'vue-debounce'
import VuejsDialog from 'vuejs-dialog'
import VueMoment from 'vue-moment'
import VueNumeralFilter from 'vue-numeral-filter'
import VueBreadcrumbs from 'vue-breadcrumbs'

import Home from './routes/Home.vue'

import authentication from './services/authentication';
import config from './services/config';
import './icons'

import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.config.productionTip = false;
if (process.env.VUE_APP_API_URL) {
  Vue.config.apiUrl = process.env.VUE_APP_API_URL;
} else {
  Vue.config.apiUrl = 'http://localhost:8000';
}
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueDebounce);
Vue.use(VuejsDialog);
Vue.use(VueMoment);
Vue.use(VueNumeralFilter);

Vue.use(VueBreadcrumbs, {
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key"><span v-if="key > 0">&nbsp;/&nbsp;</span>{{ crumb | crumbText }}</router-link> ' +
    '</nav>'
});

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes
});

Vue.filter('longText', function (value) {
  if (value && value.length > 12) {
    return value.substr(0, 12) + '...';
  } else {
    return value;
  }
});

Vue.filter('formatCurrency', function(value) {
  if (value) {
    var result = value.toFixed(2);
    return '\u20AC' + result.replace('.', ',')
  }
});

Vue.mixin({
  beforeCreate() {
    this.authentication = authentication;
    this.$config = config;
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
