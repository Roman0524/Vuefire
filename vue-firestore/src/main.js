import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-tailwind";
import { firestorePlugin } from "vuefire";
import '@/assets/css/tailwind.css'

Vue.use(VueTailwind);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
