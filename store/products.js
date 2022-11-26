export const state = () => ({
    products: [],
    skip: 0,
})

export const mutations = {
    updateProducts(state, products) {
        products.forEach(product => {
            state.products.push(product);
            state.skip += 1;
        });
    },
    updateProduct(state, product) {

    }
}

export const actions = {
    async fetchProducts(context) {
        const products = await this.$axios.$get('/products/' + context.state.skip);
        context.commit('updateProducts', products);
    },
    async fetchProduct(context) {
        const product = await this.$axios.$get('/product/tort-vlad-a4');
        // console.log(product)
        context.commit('updateProduct', product);
    },
    countProducts(context){
        return context.state.products.length;
    },

}

export const getters = {
    getProducts(state) {
        return state.products;
    }
    // getProduct(state) {
    //
    // }
}
