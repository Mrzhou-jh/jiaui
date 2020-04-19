import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SButton from "./components/button/SimpleButton.vue";
import SButtonGroup from "./components/button/SimpleButtonGroup.vue";
import SInput from "./components/input/SimpleInput.vue";
import SSvgIcon from "./components/svgicon/SvgIcon.vue";

Vue.config.productionTip = false;
Vue.component("SButton", SButton);
Vue.component("SButtonGroup", SButtonGroup);
Vue.component("SInput", SInput);
Vue.component("SSvgIcon", SSvgIcon);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
