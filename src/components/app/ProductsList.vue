<template>
    <div class="col l6 s12">

        <product-item
                v-for="(product, i) in products"
                :key="product.id"
                :product="product"
                :index="(i+1)"
        >


        </product-item>

    </div>
</template>

<script>
    import ProductItem from "./ProductItem";
     import ProductService from "../../ProductService";

    export default {
        name: "ProductsList",
        data() {
            return {
                products: []
            }
        },
        computed: {
            /*products() {
                // return this.$store.state.products;
                return this.$store.getters.getProducts;
            }*/
        },
        created() {
            this.products = ProductService.products;

            //this.$store.commit('loadProducts', ProductService.products)//mutations
           // this.$store.dispatch('fetchProducts')//actions for modification
        },
        methods: {},
        components: {
            ProductItem
        }
    }
</script>

<style scoped>

</style>