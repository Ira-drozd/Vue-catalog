<template>

    <div class="card blue-grey darken-1 card-content white-text">
        <h4 class="card-title">{{index}} {{product.title}}</h4>
        <p class="card-text">{{product.qt}} items for ${{product.price}}</p>
        <a class="waves-effect waves-light btn"
           @click="viewDetailsClicked"
        >View Details</a>
    </div>

</template>

<script>
    import ProductService from "../../ProductService";

    export default {
        props: {
            product: {
                type: Object,
                required: true
            },
            index: {
                type: Number
            }
        },
        data() {
            return {}
        },
        methods: {
            viewDetailsClicked() {
                //this.$emit('viewDetails', this.product.id)
               // this.viewDetails(this.product.id);

                ProductService.viewDetails(this.product.id);

            }
        },
        name: "ProductItem"
    }
</script>

<style scoped>

</style>