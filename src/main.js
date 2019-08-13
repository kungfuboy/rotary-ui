import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import RotaryUI from "./index.js";
import Demo from "./demo/index.js";
import ShowCode from "./Layout/ShowCode.vue";

ShowCode.install = Vue => {
  Vue.component(ShowCode.name, ShowCode);
};

Vue.use(RotaryUI);
Vue.use(Demo);
Vue.use(ShowCode);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
