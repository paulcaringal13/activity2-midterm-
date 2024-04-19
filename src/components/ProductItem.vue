<template>
  <div
    class="flex flex-col gap-2 h-fit p-6 m-4 border-[1px] border-zinc-200 rounded-lg shadow-sm"
  >
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p
      class="text-xs text-zinc-300 h-[50px] w-full text-justify overflow-hidden text-ellipsis"
    >
      {{ product.description }}
    </p>
    <p class="ml-auto font-semibold">₱ {{ product.price }}</p>
    <div class="flex gap-2">
      <router-link
        :to="{ name: 'EditProduct', params: { id: product.id } }"
        class="rounded-md px-4 py-2 border-[1px] border-zinc-200 w-fit hover:bg-secondary hover:text-white"
        >Edit</router-link
      >

      <button
        @click="deleteProduct"
        class="rounded-md px-4 py-2 border-[1px] border-zinc-200 w-fit hover:bg-secondary hover:text-white"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    index: Number,
  },
  methods: {
    deleteProduct() {
      this.$store.commit("deleteProduct", this.index);
    },
  },
};
</script>