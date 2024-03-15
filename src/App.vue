<template>
  <div>
    <ProductList :productArray="productArray" :addToCart="addToCart" />
  </div>
  <p class="error-msg">{{ errorMsg }}</p>
  <div>
    <Cart
      :cart="cart"
      :removeProduct="removeProduct"
      :addQty="addQty"
      :minusQty="minusQty"
    />
    <p>Total: ₱{{ total }}</p>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

export default {
  data() {
    return {
      productArray: [
        { productId: "1", productName: "Apple", productPrice: 50 },
        { productId: "2", productName: "Banana", productPrice: 100 },
        { productId: "3", productName: "Orange", productPrice: 30 },
        { productId: "4", productName: "Mango", productPrice: 75 },
      ],
      cart: [],
      errorMsg: "",
    };
  },
  components: {
    ProductList,
    Cart,
  },
  methods: {
    addToCart(product) {
      const isExisting = this.cart.find(
        (cartItem) => cartItem.productId == product.productId
      );

      if (isExisting) {
        this.errorMsg = "Product already in cart";
      } else {
        this.cart.unshift(product);
        this.errorMsg = "";
      }
    },
    removeProduct(index) {
      this.cart.splice(index, 1);
    },
    addQty(productId) {
      this.cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          cartItem.qty++;
        }
      });
    },
    minusQty(productId) {
      this.cart.forEach((cartItem, index) => {
        if (cartItem.productId === productId) {
          if (cartItem.qty == 1) {
            this.cart.splice(index, 1);
          } else {
            cartItem.qty--;
          }
        }
      });
    },
  },
  computed: {
    // productArray: [
    //     { productId: "1", productName: "Apple", productPrice: 50 },
    //     { productId: "2", productName: "Banana", productPrice: 100 },
    //     { productId: "3", productName: "Orange", productPrice: 30 },
    //     { productId: "4", productName: "Mango", productPrice: 75 },
    //   ],
    total() {
      return this.cart.reduce((a, b) => a + b.qty * b.productPrice, 0);
    },
  },
};
</script>
<style>
/* Global styles */
.error-msg {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 15px;
}
</style>
