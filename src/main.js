import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import JButton from "./components/button/Button.vue";
import JButtonGroup from "./components/button/ButtonGroup.vue";

Vue.config.productionTip = false;
Vue.component("j-button", JButton);
Vue.component("j-button-group", JButtonGroup);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
