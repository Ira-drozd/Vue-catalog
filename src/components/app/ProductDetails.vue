<template>
    <div class="col s12">
        <div class="product card">
            <h3>Product Detail</h3>
            <form>
                <div>
                    <label for="title">Title </label>
                    <span>{{product.title}}</span>
                </div>
                <div>
                    <label for="price">Price </label>
                    <span>${{product.price}}</span>
                </div>
                <div>
                    <label for="qt">Quantity </label>
                    <span>{{product.qt}}</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import ProductService from "../../ProductService";

    export default {
        name: "ProductDetails",
        data(){
          return{
              product:{}
          }
        },
        created() {
            ProductService.$on('viewDetails', (secectedProduct)=>
                this.product=secectedProduct);

        }
    }
</script>

<style scoped>

</style>