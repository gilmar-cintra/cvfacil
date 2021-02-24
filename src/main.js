import Vue from 'vue'
import App from './App.vue'

import TemplateOne from './components/TemplateOne.vue';
import InfoBlock from './components/InfoBlock.vue';
import Stars from './components/Stars.vue';

Vue.component('a4-page', TemplateOne);
Vue.component('info-block', InfoBlock);
Vue.component('stars', Stars);

new Vue({
  render: h => h(App),
}).$mount('#app')
