<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject, Emit } from "vue-property-decorator";

@Component({})
export default class wynHeader extends Vue {
    userAvator : string = 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .user-avator-dropdown{
        display: inline-block;
        .ivu-dropdown{
            float: right;
            margin-right: 50px;
        }
    }
</style>
