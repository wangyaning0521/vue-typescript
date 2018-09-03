<template>
    <div class='wynSider'>
        <div class="logo">
            <img src="../../../assets/logo.jpg" alt="">
        </div>
        <Menu :theme="themeColor" @on-select='MenuChange'>
            <Submenu v-for='(item,index) in Submenu' :key='index' :name='item.index'>
                <template slot="title">
                    <Icon :type="item.Icon" />
                    {{item.title}}
                </template>
                <div v-for='(ite,i) in item.menu' :key='i'>
                    <MenuItem v-if='ite.menuName' :name="ite.name.menuUrl">
                        <Icon :type="ite.Icon" />
                        {{ite.menuName}}
                    </MenuItem>
                    <Submenu v-else :name="ite.index">
                        <template slot="title">
                            <Icon :type="ite.Icon" />
                            {{ite.title}}
                        </template>
                        <MenuItem v-for='(MenuItem,MenuIndex) in ite.children' :key='MenuIndex' :name="MenuItem.name.menuUrl">
                            <Icon :type="MenuItem.Icon" />
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
import { Component, Vue, Emit } from "vue-property-decorator";
import Submenu from "@/lib/menu";



@Component({})
export default class wynSider extends Vue {
    

  themeColor: string = "dark";
  Submenu: any = Submenu

  /**
   *   @event 点击路由跳转
   */
  // @Emit('on-select')
  MenuChange(val: any) {
    // console.log( this )
    // this.$emit("on-select", val);
    this.$router.push(val);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import './sider.less';
</style>
