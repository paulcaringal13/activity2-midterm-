<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <input type="text" v-model="name" placeholder="Name" required />
      <input
        type="text"
        v-model="description"
        placeholder="Description"
        required
      />
      <input type="number" v-model="price" placeholder="Price" required />
      <button type="submit">Add Product</button>
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
