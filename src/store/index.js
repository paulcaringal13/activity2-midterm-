import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 5,
        name: "Product 1",
        price: 100,
        description: "Tool",
      },
      {
        id: 6,
        name: "Product 2",
        price: 150,
        description: "Arms",
      },
    ],
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, editedProduct) {
      const index = state.products.findIndex(
        (product) => product.id === editedProduct.id
      );
      if (index !== -1) {
        state.products.splice(index, 1, editedProduct);
      }
    },
  },
});
