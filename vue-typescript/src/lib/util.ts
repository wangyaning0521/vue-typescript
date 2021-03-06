import {
    State,
    Action,
    Getter,
    Mutation
} from "vuex-class";

let util = {
    openNewPage : (vm: any, navigation: Array < number > ) => {
        if (vm.$store) vm.$store.commit('NEW_PAGE', navigation);
    }
};

export const showTitle = (item:any) => item.meta.title

/**
 * @param {*} list 现有标签导航列表
 * @param {*} newRoute 新添加的路由原信息对象
 * @description 如果该newRoute已经存在则不再添加
 */
export const getNewTagList = (list: any, newRoute: any) => {
    const {
        name,
        path,
        meta
    } = newRoute
    let newList = [...list]
    if (newList.findIndex(item => item.name === name) >= 0) return newList
    else newList.push({
        name,
        path,
        meta
    })
    return newList
}
/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list:any, route:any) => {
    let res = {}
    if (list.length === 2) {
      res = getHomeRoute(list)
    } else {
      const index = list.findIndex((item :any)=> routeEqual(item, route))
      if (index === list.length - 1) res = list[list.length - 2]
      else res = list[index + 1]
    }
    return res
  }
/**
 * @description 本地存储和获取标签导航列表
 */
export const setTagNavListInLocalstorage = (list: any) => {
    localStorage.tagNaveList = JSON.stringify(list)
}

/**
 * @returns {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 */
export const getTagNavListFromLocalstorage = () => {
    
    const list = JSON.parse(localStorage.tagNaveList)
    
    return list.length  ? list : [
        {
            name: "index",
            path: "/index",
            meta:{
                title:'首页'
            }
        }
    ]
}

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList:any, routeItem:any) => {
    let len = tagNavList.length
    let res = false
    doCustomTimes(len, (index:any) => {
        if (routeEqual(tagNavList[index], routeItem)) res = true
    })
    return res
}
/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1:any, route2:any) => {
    const params1 = route1.params || {}
    const params2 = route2.params || {}
    const query1 = route1.query || {}
    const query2 = route2.query || {}
    return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}
/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times:any, callback:any) => {
    let i = -1
    while (++i < times) {
        callback(i)
    }
}
/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
const objEqual = (obj1:any, obj2:any) => {
    const keysArr1 = Object.keys(obj1)
    const keysArr2 = Object.keys(obj2)
    if (keysArr1.length !== keysArr2.length) return false
    else if (keysArr1.length === 0 && keysArr2.length === 0) return true
    /* eslint-disable-next-line */
    else return !keysArr1.some(key => obj1[key] != obj2[key])
}
/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = routers => {
    let i = -1
    let len = routers.length
    let homeRoute = {}
    while (++i < len) {
      let item = routers[i]
      if (item.children && item.children.length) {
        let res = getHomeRoute(item.children)
        if (res.name) return res
      } else {
        if (item.name === 'index') homeRoute = item
      }
    }
    return homeRoute
  }
export default util;