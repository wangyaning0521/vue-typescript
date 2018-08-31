/**
 *  @event webpackChunk 打包分块
 */
const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue");
const Login = () => import(/* webpackChunkName: "Login" */ "@/views/Login.vue");
const contractPage = () =>
  import(/* webpackChunkName: "contractPage" */ "@/views/business/contractPage.vue");
const projectPage = () =>
  import(/* webpackChunkName: "projectPage" */ "@/views/business/projectPage.vue");
const companyPage = () =>
  import(/* webpackChunkName: "companyPage" */ "@/views/user/companyPage.vue");
const userPage = () =>
  import(/* webpackChunkName: "userPage" */ "@/views/user/userPage.vue");
const customerService = () =>
  import(/* webpackChunkName: "customerService" */ "@/views/user/moreUser/customerService.vue");
const SuperAdmin = () =>
  import(/* webpackChunkName: "SuperAdmin" */ "@/views/user/moreUser/SuperAdmin.vue");

/**
 *  @event router 路由
 */
export default [
  {
    path: "/",
    name: "home",
    meta: {
        title: "首页"
    },
    component: Home,
    children: [
      {
        name: "contractPage",
        path: "/contractPage",
        meta: {
          title: "合同管理"
        },
        component: contractPage
      },
      {
        name: "projectPage",
        path: "/projectPage",
        meta: {
          title: "项目管理"
        },
        component: projectPage
      },
      {
        name: "companyPage",
        path: "/companyPage",
        meta: {
          title: "单位账号"
        },
        component: companyPage
      },
      {
        name: "userPage",
        path: "/userPage",
        meta: {
          title: "个人客户"
        },
        component: userPage
      },
      {
        name: "SuperAdmin",
        path: "/SuperAdmin",
        meta: {
          title: "超级管理"
        },
        component: SuperAdmin
      },
      {
        name: "customerService",
        path: "/customerService",
        meta: {
          title: "前道客服"
        },
        component: customerService
      }
    ]
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  }
];
