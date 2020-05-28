import Vue from 'vue';
import _ from 'lodash';


export default new Vue({
    data: {
        products: [
            {
                id: 1,
                title: 'Product #1',
                price: 50,
                qt: 1000
            },
            {
                id: 2,
                title: 'Product #2',
                price: 90,
                qt: 2500
            },
            {
                id: 3,
                title: 'Product #3',
                price: 150,
                qt: 700
            },
            {
                id: 4,
                title: 'Product #4',
                price: 90,
                qt: 1560
            }

        ],
        pages: [
            {
                name: "Home",
                url: "/",
                exact:true

            },
            {
                name: "Catalog",
                url: "/catalog",
                exact:true
            },
            {
                name: "Directive",
                url: "/directive",
                exact:true
            }
        ]
    },
    methods:{
        viewDetails(id) {
            let productToView = _.find(this.products, {id: id});
            this.$emit('viewDetails', productToView);
        },
        addProduct(title, price, qt) {
            if(title && price &&qt){
            var id = this.products[this.products.length - 1].id + 1;
            this.products.push({
                id,
                title,
                price,
                qt
            })
            }

        }
    }
});