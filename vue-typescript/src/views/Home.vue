<template>

    <div class="home">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78">
                <tags-sider ref='tagsSider' @on-select='selectSider'></tags-sider>
            </Sider>
            <Layout>

                <Header :style="{padding: 0}" class="layout-header-bar">
                    <div class='layout-header-Icon'>
                        <Icon :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                        <Breadcrumb>
                            <BreadcrumbItem v-for='(item,index) in navigation' :key='index'>
                                <Icon :type='item.Icon'></Icon> {{item.name}}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <tags-header></tags-header>
                </Header>

                <Header style="padding: 0;line-height:32px;height:32px;" class="layout-header-bar">
                    <div class='tag-nav-wrapper'>
                        <tags-nav  :value="$route"  @input="handleClick" :list="tagNavList"  @on-close="handleCloseTag"></tags-nav>
                    </div>
                </Header>
                
                
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>

            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Watch
    } from "vue-property-decorator";
    import tagsHeader from "@/components/main/tags-header/index";
    import tagsSider  from "@/components/main/tags-sider/index";
    import tagsNav    from "@/components/main/tags-nav/index";
    import { getNewTagList, routeEqual, getNextRoute } from '@/lib/util';

    import {
        State,
        Action,
        Getter,
        Mutation
    } from "vuex-class";

    @Component({
        components: {
            tagsHeader,
            tagsSider,
            tagsNav
        }
    })

    export default class Home extends Vue {
        /**
         * @event 变量
         */
        @State
        navigation: Array < number >;

        @State
        tagNavList: Array < number >;

        @Mutation
        SET_TAG_NAVLIST: () => void;
        /**
         * @event 初始化
         */
        mounted() {
            this.SET_TAG_NAVLIST()
        }
        created() {
            if (sessionStorage.getItem('userInfo') == null) {
                this.$Message.warning('请先登陆！')
                this.$router.push({
                    name: 'Login'
                });
            }
        }
        /**
         * @event 计算属性
         */
        /**
        * @event 路由监控
        */
        @Watch("$route")
        fetchdata( newRoute ) {
            this.SET_TAG_NAVLIST(getNewTagList(this.tagNavList, newRoute))
        }
        /**
         * @event 事件
         */
        selectSider(val: string) {

        }
        turnToPage (route) {
            // let { name : any = null, params : any = null, query : any = null } = {}
            let name   : any,
                params :  any,
                query  :  any;
            if (typeof route === 'string') name = route
            else {
                name = route.name
                params = route.params
                query = route.query
            }
            this.$router.push({
                name,
                params,
                query
            })
        }
        handleCloseTag (res, type, route) {
            let openPath = ''
            if (type === 'all') {
                this.turnToPage('index')
                openPath = '/index'
            } else if (routeEqual(this.$route, route)) {
                if (type === 'others') {
                    openPath = route.path
                } else {
                    const nextRoute = getNextRoute(this.tagNavList, route)
                    this.$router.push(nextRoute)
                    openPath = nextRoute.path
                }
            }
            this.SET_TAG_NAVLIST(res)
            console.log(openPath)
            if( openPath ) this.$refs.tagsSider.activeName = openPath
        }
        handleClick (item) {
            this.turnToPage(item)
        }
    }
</script>
<style lang='less'>
    .home,
    .ivu-layout {
        width: 100%;
        height: 100%;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .ivu-layout-header {
        display: flex;

        .layout-header-Icon {
            width: 500px;
            display: flex;

            .ivu-icon {
                display: inline-block;
                margin: 22px 20px !important;
            }
        }

        .user-avator-dropdown {
            width: 100%;
            flex: 1;
        }
    }

    .ivu-layout-sider {
        width: 240px !important;
        min-width: 240px !important;
        max-width: 240px !important;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .menu-icon {
        transition: all 0.3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width 0.2s ease 0.2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size 0.2s ease, transform 0.2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width 0.2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .tag-nav-wrapper{
        padding: 0;
        width:100%;
        height: 40px;
        background: #F0F0F0;
        overflow: hidden;
    }
</style>