import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// 引入reset.css
import "./assets/css/reset.scss";
// 引入图标文件
import "./assets/fonts/iconfont";
//引入适配文件
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
