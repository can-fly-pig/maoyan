import Vue from "vue";
import App from "./App.vue";
//路径是文件夹结束，默认找文件夹下的index文件
import router from "./router";
import store from "./store";
// 引入reset.css
import "./assets/css/reset.scss";
// 引入图标文件
import "./assets/fonts/iconfont";
//引入适配文件,配置适配字体大小
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
