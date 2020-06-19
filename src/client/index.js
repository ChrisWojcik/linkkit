import '@/styles/_fonts.scss';
import '@/styles/_sanitize.scss';
import '@/styles/_global.scss';
import '@/styles/_utils.scss';
import '@/styles/_icons.scss';

import Vue from 'vue';
import App from '@/App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
