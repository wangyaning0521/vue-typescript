import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      // 变更状态
      state.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit("add");
    }
  }
});
