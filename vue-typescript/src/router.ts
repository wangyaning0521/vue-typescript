import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: () =>
                import(/* webpackChunkName: "home" */ "./views/Home.vue"),
            children: [
                {
                    path: "/index",
                    name: "index",
                    component: () =>
                        import(/* webpackChunkName: "index" */ "./views/index.vue"),
                },
                {
                    path: "/list",
                    name: "list",
                    component: () =>
                        import(/* webpackChunkName: "list" */ "./views/list.vue")
                }
            ]

        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});
