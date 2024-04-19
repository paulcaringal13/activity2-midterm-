<template>
  <div className="h-auto">
    <h2 className="text-5xl font-extrabold m-6">Add Product</h2>
    <form
      @submit.prevent="addProduct"
      className="grow flex flex-col gap-4 mx-6"
    >
      <label for="name" className="text-lg font-semibold">Name</label>
      <input
        type="text"
        v-model="name"
        placeholder="Name"
        className="mx-4 border-[1px] border-zinc-200 p-3 rounded-md shadow-md"
        required
      />
      <label for="description" className="text-lg font-semibold"
        >Description</label
      >
      <textarea
        type="text"
        v-model="description"
        placeholder="Description"
        className="mx-4 border-[1px] h-48 border-zinc-200 p-3 rounded-md shadow-md"
        required
      />
      <label for="price" className="text-lg font-semibold">Price</label>
      <input
        type="number"
        v-model="price"
        placeholder="Price"
        className="mx-4 border-[1px] border-zinc-200 p-3 rounded-md shadow-md"
        required
      />
      <button
        type="submit"
        className="p-4 border-[1px] border-zinc-200 w-fit ml-auto rounded-md mx-6 mb-6 shadow-md hover:bg-secondary hover:text-white"
      >
        Add Product
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: Math.floor(Math.random() * 1000000) + 1,
      name: "",
      description: "",
      price: "",
    };
  },
  methods: {
    addProduct() {
      const product = {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
      };
      this.$store.commit("addProduct", product);
      this.$router.push("/");
    },
  },
};
</script>

<style>
/* Add any component-specific styles here */
</style>
