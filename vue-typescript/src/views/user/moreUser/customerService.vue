<template>
    <div class="customerService">
        <h1>This is an customerService page</h1>
        {{count}}
    </div>
</template>
<script lang='ts'>
    import {
        Component,
        Vue,
        Watch,
        Provide
    } from "vue-property-decorator";
    import {
        State,
        Action,
        Getter,
        Mutation
    } from "vuex-class";
    @Component({})
    export default class customerService extends Vue {
        @State
        count: number;
        @Mutation
        add: () => void;
        @Action
        increment: () => void;
        mounted() {
            this.add();
        }
    }
</script>