<template>
  <div class="home">
      {{activeListItemName}}
      {{activeList}}
      <button @click='changeList(2222222)'>添加</button>
      <Hello-world @on-click='clickBtn' title='asddddd' msg='阿萨德阿萨德' ref='HelloWorld'></Hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide } from "vue-property-decorator";
import FormValidateMixin from "@/mixins/mixin.ts";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import axios from "axios";


@Component({
  components: {
    HelloWorld
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

  /**
   * @event 监控
   */

  @Watch("activeListItemName", { deep: true })
  watchCount(newVal: number, oldVal: number) {
    console.log("newVal", newVal, "oldVal", oldVal);
  }

  @Watch("$route")
  fetchdata(to: any, from: any) {
    console.log("newVal", to, "oldVal", from);
  }
  /**
   * @event 初始化
   */
  mounted() {
    console.log(this);
    axios({
      method: "get",
      url: `/api/qthl-wf-busi/website/home/getMonth/6`
    })
      .then(response => {
        let {
          data: { result, code }
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
