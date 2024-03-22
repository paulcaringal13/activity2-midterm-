<template>
  <div className="flex flex-col">
    <h1 className="font-extrabold text-xl my-2">Your Cart</h1>
    <div v-if="cart.length === 0">
      <p className="text-center my-5">Cart is Empty</p>
    </div>
    <div v-else>
      <ul className="bg-white border-2 border-black rounded-lg p-4 space-y-2">
        <li
          v-for="(cartItem, index) in cart"
          :key="index"
          className="flex flex-row gap-3 h-fit w-full"
        >
          <p className="my-auto font-semibold text-lg">
            ₱{{ cartItem.productPrice }} {{ cartItem.productName }} |
          </p>
          <p className="my-auto font-semibold text-lg">
            Qty: {{ cartItem.qty }}
          </p>

          <button
            className="px-2 py-0 my-auto h-fit bg-green-500 text-white border-[1px] border-slate-800 rounded-md"
            @click="addQty(cartItem.productId)"
          >
            +
          </button>
          <button
            className="px-[12px] py-0 my-auto h-fit bg-red-500 text-white border-[1px] border-slate-800 rounded-md"
            @click="minusQty(cartItem.productId)"
          >
            -
          </button>

          <button
            className="px-[14px] py-1 h-fit rounded-md bg-secondary hover:bg-secondary/95 ml-auto text-white font-semibold"
            @click="removeProduct(index)"
          >
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
