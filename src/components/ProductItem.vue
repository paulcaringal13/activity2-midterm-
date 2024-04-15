<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
/* Add any component-specific styles here */
</style>
