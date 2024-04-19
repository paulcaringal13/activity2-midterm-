<template>
  <div className="flex flex-col gap-2">
    <div className="flex justify-between px-6 mt-4">
      <h2 className="text-2xl font-extrabold">Product List</h2>

      <router-link
        :to="{ name: 'AddProduct' }"
        className="px-4 py-2 border-[1px] border-zinc-200 rounded-md hover:bg-secondary hover:text-white"
        >Add Product</router-link
      >
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div
        v-for="(product, index) in $store.state.products"
        :key="index"
        className="col-span-1"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
};
</script>
