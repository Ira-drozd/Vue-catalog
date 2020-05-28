import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        loadProducts(state, payload) {
            state.products = payload;
        }
    },
    actions: {
        async fetchProducts(ctx) {

            const res = await fetch(
                "https://api.jsonbin.io/b/5ece6cc7bbb0e41480fff8ec",
                {
                    headers: {
                        "secret-key": "$2b$10$9shD0YjOEhuu5Xbeqi4KputeooYAgTbu3gf9/04ngfgnH1zajD/3a"
                    }
                }
            )
            const products = await res.json();

            ctx.commit('loadProducts', products)
            //  this.products = products;
        }
        /!*fetchProducts(context, products) {
           context.commit('loadProducts', products);
       }*!/
    },
    getters: {
        getProducts(state) {
            return state.products;
        }
    },
    modules: {}
})*/

export default new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        loadProducts(state, payload) {
            state.products = payload;
        }
    },
    actions: {
        loadProducts(context, products) {
            context.commit('loadProducts', products);
        }
    },
    getters: {
        getProducts(state) {
            return state.products;
        }
    },
    modules: {}
})
