<template>
    <div id="app">
        <!--    <div id="nav">-->
        <!--      <router-link to="/">Home</router-link> |-->
        <!--      <router-link to="/about">About</router-link>-->
        <!--    </div>-->
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    import MainLayout from "./layouts/MainLayout";
    import DirectiveLayout from "./layouts/DirectiveLayout";

    export default {
        computed: {
            layout() {
                return (this.$route.meta.layout || 'main')+'-layout'
            }
        },
        components: {
            MainLayout, DirectiveLayout
        }
    }
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "assets/main";
</style>
