// export const state = () => ({
//   categories: [],
//   skip: 0,
// })

// export const mutations = {
//   updateCategories(state, categories) {
//     categories.forEach(category => {
//       state.categories.push(category);
//       state.skip += 1;
//     });
//   }
// }

// export const actions = {
//   async fetchCategories(context) {
//     // const categories = await this.$axios.$get('/categories/');
//     const categories = await this.$axios.$get('/categories/' + context.state.skip);
//     context.commit('updateCategories', categories);
//   },
//   countCategories(context){
//     return context.state.categories.length;
//   }
// }

// export const getters = {
//   getCategories(state) {
//     return state.categories;
//   }
//   // getProduct(state) {
//   //
//   // }
// }
