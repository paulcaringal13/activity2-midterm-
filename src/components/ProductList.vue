<template>
  <div>
    <h1 className="font-extrabold text-xl">List of Products</h1>
    <h2 className="text-red-500 font-bold text-md ">{{ errorMsg }}</h2>
    <ul className="grid grid-cols-4 space-x-5 m-4">
      <li
        v-for="(product, index) in productArray"
        :key="index"
        className="col-span-1 bg-white border-2 border-black flex flex-col space-y-2 text-center p-4 rounded-lg"
      >
        <h3 className="text-2xl font-extrabold">{{ product.productName }}</h3>
        <h4 className="text-lg font-bold">₱{{ product.productPrice }}</h4>
        <button
          className="bg-secondary p-2 rounded-lg hover:bg-secondary/95"
          @click="addToCart({ ...product, qty: 1 })"
        >
          <p className="text-xs font-bold text-white">Add to Cart</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    productArray: Array,
    addToCart: Function,
    errorMsg: String,
  },
};
</script>
