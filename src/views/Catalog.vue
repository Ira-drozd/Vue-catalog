<template>
    <div>
        <Header>
            <h1>{{headerPage}}</h1>
            <h2 slot="subtitle">Slots</h2>
            <span>second slot</span>
        </Header>
        <div class="container">
            <div class="row">

                <products-list/>

                <div class="col m6 s12 ">
                    <div class="row">
                        <div class="center-align">
                            <button class="btn" @click="mode=(mode=='view' ? 'add': 'view')">Mode: {{mode}}</button>
                        </div>
                        <keep-alive>
                            <component
                                    :is="componentName"
                            />
                        </keep-alive>
                    </div>
                </div>


                <!--            <product-details/>-->

                <!--            <product-add> </product-add>-->

            </div>
        </div>
    </div>
</template>

<script>
    import ProductsList from "../components/app/ProductsList";
    import ProductDetails from "../components/app/ProductDetails";
    import Header from "../components/app/Header";
    import ProductAdd from "../components/app/ProductAdd";

    export default {
        name: "Catalog",
        data() {
            return {
                headerPage:'Catalog',
                mode: 'view'
            }
        },
        computed:{
           componentName(){
               return this.mode=='view' ? 'ProductDetails' : 'ProductAdd';
           }
        },
        components: {
            ProductsList, ProductDetails, Header, ProductAdd
        }
    }
</script>

<style scoped>
h2{
    color: sienna;
}
</style>