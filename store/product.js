export const state = () => ({
  product: 'dddd',
  skip: 0,
})

export const mutations = {
  updateProduct(state, product) {
    state.product = 'ffff'
  }
}

export const actions = {
  async fetchProduct(context) {
    const product = await this.$axios.$get('/product/tort-vlad-a4');
    context.commit('updateProduct', product);
  }
}

export const getters = {
  getProduct(state) {
    return state.product;
  }
}
