import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'



const Vue = createApp(App);
Vue.use(store);
Vue.mount('#app')