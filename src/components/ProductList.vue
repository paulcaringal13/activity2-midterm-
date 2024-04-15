<template>
  <div>
    <h2>Product List</h2>
    <div v-for="(product, index) in $store.state.products" :key="index">
      <ProductItem :product="product" />
    </div>
    <router-link :to="{ name: 'AddProduct' }">Add Product</router-link>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  // computed: {
  //   ...mapState(["products"]),
  // },
};
</script>

<style>
/* Add any component-specific styles here */
</style>
