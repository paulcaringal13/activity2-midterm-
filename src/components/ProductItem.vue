<template>
  <div
    className="flex flex-col gap-2 h-fit p-6 m-4 border-[1px] border-zinc-200 rounded-lg shadow-sm"
  >
    <h3 className="text-lg font-semibold">{{ product.name }}</h3>
    <p
      className="text-xs text-zinc-300 h-[50px] w-full text-justify overflow-hidden text-ellipsis"
    >
      {{ product.description }}
    </p>
    <p className="ml-auto font-semibold">₱ {{ product.price }}</p>

    <router-link
      :to="{ name: 'EditProduct', params: { id: product.id } }"
      className="rounded-md px-4 py-2 border-[1px] border-zinc-200 w-fit hover:bg-secondary hover:text-white"
      >Edit</router-link
    >

    <button
        @click="deleteProduct"
        class="rounded-md px-4 py-2 border-[1px] border-zinc-200 w-fit hover:bg-secondary hover:text-white"
      >
        Delete
      </button>

  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    deleteProduct() {
      this.$store.commit("deleteProduct", this.index);
    },
  }
};
</script>
