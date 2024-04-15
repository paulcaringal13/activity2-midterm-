<template>
  <div>
    <h2>Edit Product</h2>
    <form @submit.prevent="editProduct">
      <input
        type="text"
        v-model="editedProduct.name"
        placeholder="Name"
        required
      />
      <input
        type="text"
        v-model="editedProduct.description"
        placeholder="Description"
        required
      />
      <input
        type="number"
        v-model="editedProduct.price"
        placeholder="Price"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedProduct: this.$store.state.products.find(
        (product) => product.id === parseInt(this.$route.params.id)
      ),
    };
  },
  methods: {
    editProduct() {
      this.$store.commit("editProduct", this.editedProduct);
      this.$router.push("/");
    },
  },
};
</script>
