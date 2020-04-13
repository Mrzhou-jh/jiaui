import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import JButton from "./components/button/Button.vue";

Vue.config.productionTip = false;
Vue.component("j-button", JButton);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
