import { Vue, Component } from "vue-property-decorator";
declare module "vue/types/vue" {
  interface Vue {
    form: Object;
    handleSubmit(name: any): Promise<any>;
    handleReset(name: any): void;
  }
}

/**
 * mixins
 */
@Component
export default class FormValidateMixin extends Vue {
  form: Object = {};
  handleSubmit(name: any): Promise<any> {
    return new Promise(resolve => {
      resolve();
    });
  }
  handleReset(name: any): void {
    window.alert(`${name}`);
  }
}
