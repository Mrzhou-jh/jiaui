import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SButton from "./components/button/SimpleButton.vue";
import SButtonGroup from "./components/button/SimpleButtonGroup.vue";
import SInput from "./components/input/SimpleInput.vue";
import SSvgIcon from "./components/svgicon/SvgIcon.vue";
import SimpleTabsDemo from "@components/tabs/SimpleTabsDemo";
import SimplePopover from "@components/popover/SimplePopover";

Vue.config.productionTip = false;
Vue.component("SButton", SButton);
Vue.component("SButtonGroup", SButtonGroup);
Vue.component("SInput", SInput);
Vue.component("SSvgIcon", SSvgIcon);
Vue.component("STabsDemo", SimpleTabsDemo);
Vue.component("SPopover", SimplePopover);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
