import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        description:
          "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi repudiandae, illum facere fugiat illo inventore nobis asperiores porro? Incidunt iusto optio possimus architecto hic. Minus, eius ipsam fugit, dolores provident illum quaerat aliquam nam commodi similique magni voluptatem expedita, illo laudantium doloremque nemo fuga.",
      },
      {
        id: 2,
        name: "Product 2",
        price: 150,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati veritatis nemo tempore eaque ea modi nihil praesentium, facere id repellendus quisquam iusto rem fuga.",
      },
      {
        id: 3,
        name: "Product 3",
        price: 50,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, maxime fugit animi omnis incidunt ullam maiores repellendus cumque quia dolore ex, aliquid eaque soluta sit excepturi, sed quaerat nobis nesciunt.",
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
