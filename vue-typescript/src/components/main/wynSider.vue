<template>
    <div class='wynSider'>
        <div class="logo">
            <img src="../../assets/logo.jpg" alt="">
        </div>
        <Menu :theme="themeColor">
            <!-- 导航 -->
            <Submenu 
                v-for='(item,index) in Submenu' 
                :key='index' 
                :name='item.index'
            >
                <!-- title -->
                <template slot="title">
                    <Icon 
                        :type="item.Icon" 
                    />
                    {{item.title}}
                </template>

                <!-- 子菜单 -->
                <div v-for='(ite,i) in item.menu' :key='i'>

                    <MenuItem 
                        v-if='ite.menuName' 
                        :name="ite.name"
                    >
                        {{ite.menuName}}
                    </MenuItem>
                    <!-- 二级菜单 -->
                    <Submenu 
                        v-else 
                        :name="ite.index">
                            <template 
                                slot="title"
                            >
                                {{ite.title}}
                            </template>
                            <MenuItem 
                                v-for='(MenuItem,MenuIndex) in ite.children' 
                                :key='MenuIndex' 
                                :name="MenuItem.name"
                            >
                                {{MenuItem.menuName}}
                            </MenuItem>
                    </Submenu>
                    
                </div>
            </Submenu>
        </Menu>
        <div class='wynSider-RadioGroup'>
            <p>切换主题</p>
            <RadioGroup v-model="themeColor">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
            </RadioGroup>
        </div>
    </div>

</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue,
        Inject,
        Emit
    } from "vue-property-decorator";

    @Component({})
    export default class wynSider extends Vue {
        themeColor: string = 'dark'
        Submenu: any = [{
                title: '业务管理',
                index: 1,
                Icon: 'ios-analytics',
                menu: [{
                        name: '1-1',
                        menuName: '合同管理'
                    },
                    {
                        name: '1-2',
                        menuName: '项目管理'
                    },
                ]
            },
            {
                title: '客户管理',
                index: 2,
                Icon: 'ios-analytics',
                menu: [{
                        name: '2-1',
                        menuName: '单位账号',
                    },
                    {
                        name: '2-2',
                        menuName: '个人客户',
                    },
                    {
                        title: '个人更多信息',
                        index: 3,
                        children: [{
                                name: '3-1',
                                menuName: '超级管理员',
                            },
                            {
                                name: '3-2',
                                menuName: '前道客服',
                            }
                        ]
                    }
                ]
            }
        ]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .wynSider {
        height: 100%;
        position: relative;

        >.ivu-menu {
            height: 100%;
            padding: 55px 0 50px 0;
        }

        &-RadioGroup {
            position: absolute;
            bottom: 10px;
            left: 10px;
            z-index: 555555555555555555;
        }

        >.logo {
            position: absolute;
            top: 0px;
            left: 0;
            z-index: 555555555555555555;
            height: 64px;
            padding: 10px;
            width: 100%;

            >img {
                display: block;
                height: 44px;
                margin: 0 auto;
                width: auto;
            }
        }
    }
</style>