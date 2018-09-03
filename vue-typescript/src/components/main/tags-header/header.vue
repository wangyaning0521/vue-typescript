<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click='dropClick'>
      <Avatar src="https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png"/>
      欢迎你：{{userName}}
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

    userName : string = ''

    created(){
        if(sessionStorage.getItem('userInfo') !== null){
            let {userName, password } = JSON.parse(sessionStorage.getItem('userInfo'))
            this.userName = userName
        }
    }

    dropClick( val:string ){
        switch( val ){
            case 'logout' :
                sessionStorage.removeItem('userInfo')
                this.$router.push({
                    name: 'Login'
                });
            break
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import './header.less';
</style>
