import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import JButton from "./components/button/Button.vue";
import JButtonGroup from "./components/button/ButtonGroup.vue";
import JInput from "./components/input/Input.vue";
import SvgIcon from "./components/svgicon/SvgIcon.vue";

Vue.config.productionTip = false;
Vue.component("j-button", JButton);
Vue.component("j-button-group", JButtonGroup);
Vue.component("j-input", JInput);
Vue.component("j-svg-icon", SvgIcon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
