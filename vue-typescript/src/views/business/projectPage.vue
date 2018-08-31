<template>
    <div class="projectPage">
        <h1>This is an projectPage page</h1>
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
    export default class projectPage extends Vue {
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