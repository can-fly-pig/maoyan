import Vue from "vue";
import Vuex from "vuex";

import moduleCity from "./moduleCity";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleCity
  }
})
