<template>
    <div class="userPage">
        <h1>This is an userPage page</h1>
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
    export default class userPage extends Vue {
        // @State
        // count: number;
        // @Mutation
        // add: () => void;
        // @Action
        // increment: () => void;
        // mounted() {
        //     this.add();
        // }
    }
</script>