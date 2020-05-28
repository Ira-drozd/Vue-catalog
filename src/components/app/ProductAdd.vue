<template>
    <div class="col s12">
        <div class="product card ">
            <form class="container">
                <div class="row"><label for="title">Title</label>
                    <input v-model="product.title" type="text" placeholder="Enter title">
                </div>
                <div class="row"><label for="price">Title</label>
                    <input v-model="product.price" type="number" placeholder="Enter price">
                </div>
                <div class="row"><label for="title">Quantity</label>
                    <input v-model="product.qt" type="number" placeholder="Enter quantity">
                </div>
                <button @click.prevent="addProduct" class="btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import ProductService from "../../ProductService";

    export default {
        name: "ProductAdd",
        data() {
            return {
                product: {}
            }
        },
        components: {
        },
        methods: {
            addProduct() {
                ProductService.addProduct(this.product.title, this.product.price, this.product.qt);


            }
        }
    }
</script>

<style scoped>

</style>