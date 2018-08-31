import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    navigation : []
  },
  mutations: {
    add(state) {
      // 变更状态
      state.count++;
    },
    newPage( state:any, navigation:Array<number> ){
        state.navigation = navigation
    },
  },
  actions: {
    increment(context) {
      context.commit("add");
    }
  }
});
