import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 10.99,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 19.99,
      },
    ],
  },
  mutations: {},
});
