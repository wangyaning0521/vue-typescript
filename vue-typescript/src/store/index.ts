import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import * as types from './mutation-types'
import { setTagNavListInLocalstorage,  getTagNavListFromLocalstorage, routeHasExist } from '@/lib/util'
export default new Vuex.Store({
  state: {
    tagNavList: [],
    navigation: []
  },
  mutations: {
    [types.SET_TAG_NAVLIST](state :any, list :any) {
        if (list) {
            state.tagNavList = [...list]
            setTagNavListInLocalstorage([...list])
        } else state.tagNavList = getTagNavListFromLocalstorage()
    },
    [types.ADD_TAG](state :any , {
        route ,
        type = 'unshift'
    }) {
        if (!routeHasExist(state.tagNavList, route)) {
            if (type === 'push') state.tagNavList.push(route)
            else {
                if (route.name === 'home') state.tagNavList.unshift(route)
                else state.tagNavList.splice(1, 0, route)
            }
            setTagNavListInLocalstorage([...state.tagNavList])
        }
    },
    [types.NEW_PAGE](state: any, navigation: Array < number > ) {
        state.navigation = navigation
    },
  },
  actions: {
  },
});
