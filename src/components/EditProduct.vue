// Edit Page
<template>
  <div className="h-auto">
    <h2 className="text-5xl font-extrabold m-6">Edit Product</h2>
    <form
      @submit.prevent="editProduct"
      className="grow flex flex-col gap-4 mx-6"
    >
      <label for="name" className="text-lg font-semibold">Name</label>
      <input
        type="text"
        v-model="editedProduct.name"
        placeholder="Name"
        className="mx-4 border-[1px] border-zinc-200 p-3 rounded-md shadow-md"
        required
      />
      <label for="description" className="text-lg font-semibold"
        >Description</label
      >
      <textarea
        type="text"
        v-model="editedProduct.description"
        placeholder="Description"
        className="mx-4 h-48 border-[1px] border-zinc-200 p-3 rounded-md shadow-md"
        required
      />
      <label for="price" className="text-lg font-semibold">Price</label>

      <input
        type="number"
        v-model="editedProduct.price"
        placeholder="Price"
        className="mx-4 border-[1px] border-zinc-200 p-3 rounded-md shadow-md"
        required
      />
      <button
        type="submit"
        className="p-4 border-[1px] border-zinc-200 w-fit ml-auto rounded-md mx-6 mb-6 shadow-md hover:bg-secondary hover:text-white"
      >
        Save Changes
      </button>
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
