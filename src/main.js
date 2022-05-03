import Vue from 'vue'
import App from './App.vue'

import MaxTable from './MaxTable.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export { MaxTable };
