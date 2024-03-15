<template>
  <div class="product-container">
    List of Products
    <ul>
      <li
        v-for="(product, index) in productArray"
        :key="index"
        class="product-list"
      >
        <p>₱{{ product.productPrice }} {{ product.productName }}</p>
        <button
          class="add-to-cart-button"
          @click="addToCart({ ...product, qty: 1 })"
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CounterButton",
  props: {
    productArray: Array,
    addToCart: Function,
  },
};
</script>

<style>
p {
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0;
}

.product-container {
  width: 100vw;
  height: fit-content;
}

.product-list {
  display: flex;
  flex-direction: row;
  height: fit-content;
  column-gap: 0.75rem;
  margin-top: 0.24rem;
  /* background-color: #ef4444; */
}

.add-to-cart-button {
  height: fit-content;
  border-radius: 0.375rem;
  padding: 0.25rem;
  font-size: 10px;
  line-height: 10px;
  cursor: pointer;
}

.add-product-button {
  background-color: transparent;
  cursor: pointer;
  border: none;
  margin-top: 20px;
}
</style>
