<template>
  <div>
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue"; // Adjust the path if needed

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
