<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between px-6 mt-4">
      <h2 class="text-2xl font-extrabold">Product List</h2>

      <router-link
        :to="{ name: 'AddProduct' }"
        class="px-4 py-2 border-[1px] border-zinc-200 rounded-md hover:bg-secondary hover:text-white"
        >Add Product</router-link
      >
    </div>

    <div class="grid grid-cols-3 gap-2">
      <transition-group name="scale">
        <div
          v-for="(product, index) in $store.state.products"
          :key="index"
          class="col-span-1"
        >
          <ProductItem :product="product" :index="index" />
        </div>
      </transition-group>
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

<style>
.scale-enter-active {
  transition: transform 0.5s;
}
.scale-leave-active {
  transition: transform 0.5s;
  transform: scale(0);
}
</style>
