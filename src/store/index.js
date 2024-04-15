import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
  },
});
