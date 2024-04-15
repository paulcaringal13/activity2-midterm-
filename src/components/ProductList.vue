<template>
  <div>
    <h2>Product List</h2>
    <div v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </div>
    <router-link :to="{ name: 'AddProduct' }">Add Product</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(['products']),
  },
};
</script>

<style>
/* Add any component-specific styles here */
</style>
