<template>
    <nav class="teal lighten-2">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link
                    v-for="page in pages"
                    :key="page.url"
                    tag="li"
                    active-class="active"
                    :to="page.url"
                    :exact="page.exact"
                    >
                    <a>{{page.name}}</a>
                </router-link>
                <!--<li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>-->
            </ul>
        </div>
    </nav>
</template>

<script>
    import ProductService from "../../ProductService";

    export default {
        name: "NavbarMenu",
        data(){
            return{
                pages:[]
            }
        },
        created() {
            this.pages=ProductService.pages;
        },

    }
</script>

<style scoped>

</style>