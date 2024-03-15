<template>
  <div>
    Your Cart
    <div v-if="cart.length === 0"><p class="cart-title">Cart is Empty</p></div>
    <div v-else>
      <ul>
        <li v-for="(cartItem, index) in cart" :key="index" class="product-list">
          <p>
            Qty: {{ cartItem.qty }}
            <button class="add-qty" @click="addQty(cartItem.productId)">
              +
            </button>
            <button class="minus-qty" @click="minusQty(cartItem.productId)">
              -
            </button>
            ₱{{ cartItem.productPrice }}
            {{ cartItem.productName }}
          </p>

          <button class="add-to-cart-button" @click="removeProduct(index)">
            Remove Product
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProducts",
  props: {
    cart: Array,
    removeProduct: Function,
    addQty: Function,
    minusQty: Function,
  },
};
</script>

<style>
.cart-title {
  margin: 2.5rem;
}

.add-qty {
  border-radius: 9999px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.minus-qty {
  border-radius: 9999px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
