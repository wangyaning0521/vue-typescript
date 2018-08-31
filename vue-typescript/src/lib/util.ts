import {
    State,
    Action,
    Getter,
    Mutation
} from "vuex-class";

let util = {

};

//路由后执行的方法
util.openNewPage =  (vm:any, navigation: Array<number>) => {
    // console.log(Object.keys(vm))
    if( vm.$store ) vm.$store.commit('newPage', navigation);
    
};

export default util;
