<template>

    <div class="home">
        <!-- <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider hide-trigger>
                    <div id="nav">
                        <router-link to="/index">Home</router-link> |
                        <router-link to="/list">About</router-link>
                    </div>
                </Sider>
                <Content>
                    
                </Content>
            </Layout>
        </Layout> -->
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <div class='layout-header-Icon'>
                        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    </div>
                    
                    <wyn-header></wyn-header>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view />
                </Content>
            </Layout>
        </Layout>
        
        <!-- {{activeListItemName}}
        {{activeList}}
        <button @click='changeList(2222222)'>添加</button>
        <Hello-world @on-click='clickBtn' title='asddddd' msg='阿萨德阿萨德' ref='HelloWorld'></Hello-world> -->
        
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Watch,
        Provide
    } from "vue-property-decorator";
    import FormValidateMixin from "@/mixins/mixin.ts";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
    import wynHeader from "@/components/main/wynHeader.vue";
    import axios from "axios";

    @Component({
        components: {
            HelloWorld,
            wynHeader
        },
        mixins: [FormValidateMixin]
    })
    export default class Home extends Vue {
        /**
         * @event 变量
         */
        @Provide()
        activeListItemName: number = 222;
        @Provide()
        list: any = [];
        isCollapsed: boolean = false

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
            console.log(this.$route.name);
            axios({
                    method: "get",
                    url: `/api/qthl-wf-busi/website/home/getMonth/6`
                })
                .then(response => {
                    let {
                        data: {
                            result,
                            code
                        }
                    } = response;
                    if (code == 0) {
                        this.list = result;
                    }
                })
                .catch(error => {});
        }
        /**
         * @event 计算属性
         */

        get activeList(): number {
            return this.activeListItemName + 1;
        }

        get rotateIcon () : any{
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        }
        get menuitemClasses () : any{
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
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
        collapsedSider () {
            this.$refs.side1.toggleCollapse();
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