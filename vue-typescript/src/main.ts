/**
    @event vue配置
*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "./registerServiceWorker";

/**
    @event 辅助配置
*/
import iview from "iview";
import axiosPlug from "./lib/http";
Vue.use(iview);
Vue.use(axiosPlug);
import "./assets/common.less";

Vue.config.productionTip = false;

/**
    @event 实例化
*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
