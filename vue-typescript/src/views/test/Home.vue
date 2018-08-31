<template>

    <div class="home">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78">
                <wyn-sider></wyn-sider>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <div class='layout-header-Icon'>
                        <Icon :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    </div>
                    <wyn-header></wyn-header>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view />
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Watch,
        Provide
    } from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
    import wynHeader from "@/components/main/wynHeader.vue";
    import wynSider from "@/components/main/wynSider.vue";

    @Component({
        components: {
            HelloWorld,
            wynHeader,
            wynSider
        }
    })
    export default class Home extends Vue {
        /**
         * @event 变量
         */
        @Provide()
        activeListItemName: number = 222;
        @Provide()
        list: any = [];

        /**
         * @event 监控
         */

        @Watch("activeListItemName", {
            deep: true
        })
        watchCount(newVal: number, oldVal: number) {
            console.log("newVal", newVal, "oldVal", oldVal);
        }

        @Watch("$route.name")
        fetchdata(to: any, from: any) {
            console.log("newVal", to, "oldVal", from);
        }
        /**
         * @event 初始化
         */
        mounted() {

        }
        /**
         * @event 计算属性
         */

        get activeList(): number {
            return this.activeListItemName + 1;
        }
        /**
         * @event 事件
         */
        changeList(param: number) {
            this.activeListItemName = param;
        }
        clickBtn(val: number) {
            alert(val);
        }
    }
</script>
<style lang='less'>
    .home, .ivu-layout{
        width:100%;
        height: 100%;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        
    }
    .ivu-layout-header{
        display: flex;
        .layout-header-Icon {
            width:62px;
        }
        .user-avator-dropdown{
            width:100%;
            flex:1;
        }
    }
    .ivu-layout-sider{
        width: 240px!important;
        min-width: 240px!important;
        max-width: 240px!important;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>