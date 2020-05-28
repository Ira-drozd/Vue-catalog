<template>

    <div>

        <navbar-menu></navbar-menu>

        <div id="header-slots">
            <div>
                <slot></slot>
            </div>
            <div>
                <slot name="subtitle"></slot>
            </div>
            <div name="copyright">Ira M. Inc.</div>
        </div>
    </div>
</template>

<script>
    import NavbarMenu from "./NavbarMenu";

    export default {
        name: "Header",
        components:{
            NavbarMenu
        }
    }
</script>

<style scoped>

</style>