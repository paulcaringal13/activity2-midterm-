<template>
  <NavbarComponent />
  <div className="m-16 mx-56">
    <h1 className="text-4xl font-extrabold mb-10">Online Bookstore</h1>

    <div name="container" className="flex flex-row gap-16">
      <!-- Selected Book -->
      <div
        name="selected-book"
        className="flex flex-col w-fit h-[800px] space-y-4"
      >
        <img
          :src="$store.state.selectedBook.img"
          alt="Book Cover"
          className="w-[600px] h-[550px] drop-shadow-xl"
        />
        <div className="flex flex-row justify-between text-xl">
          <p className="font-bold">{{ $store.state.selectedBook.name }}</p>
          <p className="font-light">${{ $store.state.selectedBook.price }}</p>
        </div>
        <!-- Add to Cart -->
        <button
          @click="addToCart($store.state.selectedBook)"
          className="w-fit bg-none px-4 py-3 border-[1px] shadow-inner rounded-md border-slate-700 hover:bg-secondary hover:text-white"
        >
          Add to Cart
        </button>

        <!-- Your Cart -->
        <div className="border-t-[1px] border-slate-700">
          <h2 className="font-bold text-lg mt-2">Your Cart</h2>

          <!-- If cart is empty -->
          <div
            className="flex w-full h-[250px]"
            v-if="$store.state.cart.length === 0"
          >
            <h1 className="h-fit m-auto">No books in cart</h1>
          </div>

          <!-- If cart is not empty -->
          <div v-else>
            <ul className="flex flex-col gap-y-3">
              <li
                v-for="(book, index) in cartItems"
                :key="index"
                className="flex flex-row flex-wrap items-start"
              >
                <img
                  :src="book.img"
                  alt="Book Cover"
                  className="w-16 h-18 drop-shadow-xl"
                />
                <div className="p-4 w-[250px]">
                  <p className="font-semibold text-sm w-4/5">
                    {{ book.name }} - ${{ book.price }}
                  </p>
                  <!-- Remove -->
                  <button
                    @click="removeFromCart(index)"
                    class="p-1 text-xs font-semibold leading-tight border-b-[1px] border-slate-800 w-[40%] tracking-widest hover:opacity-80"
                  >
                    Remove
                  </button>
                </div>
              </li>
            </ul>
            <p
              className="font-extrabold text-xl mt-6 py-4 border-t-[1px] border-slate-800"
            >
              Total Price: ${{ totalPrice }}
            </p>
            <button
              @click="purchase"
              className="w-fit bg-none px-4 py-3 border-[1px] shadow-inner rounded-md border-slate-700 hover:bg-secondary hover:text-white"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <!-- List of Available Books -->
      <div name="available-books" className="w-fit mx-6">
        <h2 className="font-semibold text-2xl text-gray-700">
          Top Trending Books of 2024
        </h2>
        <h5 className="font-semilight text-md text-gray-500">
          Welcome to our curated collection of the hottest reads of the year.
          Dive into captivating stories, enriching knowledge, and compelling
          narratives that define the literary landscape of 2024.
        </h5>

        <!-- Search box -->
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search books..."
          class="px-3 py-2 border ml-auto flex mt-4 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <!-- If search box is empty -->
        <ul className="grid grid-cols-6 w-full" v-if="!searchQuery">
          <li
            v-for="(book, index) in availableBooks"
            :key="index"
            className="col-span-2 flex flex-col items-center text-center"
          >
            <div className="relative group w-36 h-42 mt-6">
              <p
                class="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-50"
              >
                View
              </p>
              <img
                :src="book.img"
                alt="Book Cover"
                className="relative hover:opacity-50 hover:cursor-pointer"
                @click="$store.commit('setSelectedBook', book)"
              />
            </div>

            <!-- Price and Name -->
            <p className="font-semilight text-sm mt-1 mr-2">
              ${{ book.price }}
            </p>
            <p className="font-semibold text-sm w-4/5">{{ book.name }}</p>
            <button
              class="p-1 text-xs font-semibold leading-tight border-b-[1px] border-slate-800 w-[40%] tracking-widest hover:opacity-80"
              @click="addToCart(book)"
            >
              Add to Cart
            </button>
          </li>
        </ul>

        <!-- If search box is not empty but no books found -->
        <div
          className="flex w-full h-44"
          v-if="filteredBooks.length == 0 && searchQuery"
        >
          <h3 className="w-fit h-fit m-auto">No books found.</h3>
        </div>

        <!-- If search box is not empty -->
        <ul className="grid grid-cols-6 w-full my-8" v-else>
          <li
            v-for="(book, index) in filteredBooks"
            :key="index"
            className="col-span-2 flex flex-col items-center text-center"
          >
            <div className="relative group w-36 h-42 mt-6">
              <p
                class="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-50"
              >
                View
              </p>
              <img
                :src="book.img"
                alt="Book Cover"
                className="relative hover:opacity-50 hover:cursor-pointer"
                @click="$store.commit('setSelectedBook', book)"
              />
            </div>

            <!-- Price and Name -->
            <p className="font-semilight text-sm mt-1 mr-2">
              ${{ book.price }}
            </p>
            <p className="font-semibold text-sm w-4/5">{{ book.name }}</p>
            <button
              class="p-1 text-xs font-semibold leading-tight border-b-[1px] border-slate-800 w-[40%] tracking-widest hover:opacity-80"
              @click="addToCart(book)"
            >
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Getters
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      // Connects and use searchQuery as v-model, serve as setter of searchQuery
      set(newValue) {
        this.$store.commit("setSearchQuery", newValue);
      },
    },
    availableBooks() {
      return this.$store.getters.availableBooks;
    },
    selectedBook() {
      return this.$store.getters.availableBooks;
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },

    filteredBooks() {
      return this.$store.getters.filteredBooks;
    },
  },
  methods: {
    // Use mutations addToCart that pushes book object to cartItems
    addToCart(book) {
      this.$store.commit("addToCart", book);
    },
    // Use mutations removeFromCart that removes book object from cartItems
    removeFromCart(index) {
      this.$store.commit("removeFromCart", index);
    },
    // Use actions purchase that check outs the cart
    purchase() {
      this.$store.dispatch("purchase");
    },
  },
  // Reset the error message
  mounted() {
    this.$store.commit("setErrorMsg", "");
  },
};
</script>
