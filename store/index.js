export const actions = {
    async nuxtServerInit({dispatch}){
        await dispatch('products/fetchProducts')
        // await dispatch('product/fetchProduct')
        // await dispatch('categories/fetchCategories')
    }
};
