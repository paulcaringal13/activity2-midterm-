import { createStore } from "vuex";
import router from "../router/index.js";

export default createStore({
  state: {
    // Selected book that will be displayed on home page
    selectedBook: {
      name: "PGP & GPG",
      price: 14.99,
      img: "https://covers.openlibrary.org/b/id/0000870282.jpg",
    },
    // List of books
    books: [
      {
        name: "PGP & GPG",
        price: 14.99,
        img: "https://covers.openlibrary.org/b/id/0000870282.jpg",
      },
      {
        name: "Yubisaki Milk Tea",
        price: 13.25,
        img: "https://covers.openlibrary.org/b/id/0000878837.jpg",
      },
      {
        name: "Elise the Actress",
        price: 10.5,
        img: "https://covers.openlibrary.org/b/id/0000870009.jpg",
      },
      {
        name: "Every Drop For Sale",
        price: 9.99,
        img: "https://covers.openlibrary.org/b/id/0000850092.jpg",
      },
      {
        name: "Scavenger",
        price: 11.25,
        img: "https://covers.openlibrary.org/b/id/0000870145.jpg",
      },
      {
        name: "The Faith of the American Soldier",
        price: 8.75,
        img: "https://covers.openlibrary.org/b/id/0000850315.jpg",
      },

      {
        name: "Of Golden Toads & Serpents' Roads",
        price: 15.5,
        img: "https://covers.openlibrary.org/b/id/0000850489.jpg",
      },
      {
        name: "Nora Roberts",
        price: 19.99,
        img: "https://covers.openlibrary.org/b/id/0000870371.jpg",
      },

      {
        name: "Life Lessons My Mother Taught Me",
        price: 12.99,
        img: "https://covers.openlibrary.org/b/id/0000850012.jpg",
      },
      {
        name: "I'm Here for You",
        price: 10.99,
        img: "https://covers.openlibrary.org/b/id/0000857049.jpg",
      },
    ],
    // Cart array
    cart: [],
    // List of registered users
    registeredUsers: [
      {
        username: "user",
        password: "password",
      },
    ],
    // Search box value
    searchQuery: "",
    // Login credentials
    username: "",
    password: "",
    // Error message
    errorMsg: "",
    // Set isAuthenticated to true if user existing to local storage
    isAuthenticated: localStorage.getItem("isAuthenticated") ? true : false,
  },
  mutations: {
    // Set books
    setBooks: (state, books) => (state.books = books),
    // Set selected book
    setSelectedBook: (state, book) => {
      state.selectedBook = book;
    },
    // Set search box
    setSearchQuery(state, newValue) {
      state.searchQuery = newValue;
    },
    // Set error message
    setErrorMsg(state, newValue) {
      state.errorMsg = newValue;
    },
    // Set username
    setUsername(state, newValue) {
      state.username = newValue;
    },
    // Set password
    setPassword(state, newValue) {
      state.password = newValue;
    },

    // Add books to the cart
    addToCart(state, book) {
      // Push the book object to the cart array
      state.cart.push(book);
    },
    // Remove books from the cart
    removeFromCart(state, index) {
      // Remove the book object to the cary array
      state.cart.splice(index, 1);
    },
    // Set authentication status
    authenticate(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    // Sign up user
    signUpUser(state, { username, password }) {
      // Set isAuthenticated to true
      state.isAuthenticated = true;
      //  Add item isAuthenticated to local storage for auth
      localStorage.setItem("isAuthenticated", "true");
      // Navigate to home page
      router.push({ name: "home" });
      // Push the user object to the registeredUsers array
      state.registeredUsers.push({ username: username, password: password });
    },
    // Logout user
    logoutUser(state, isAuthenticated) {
      // Set isAuthenticated to false
      state.isAuthenticated = !isAuthenticated;
      // Remove item isAuthenticated to local storage for auth
      localStorage.removeItem("isAuthenticated");
      // Navigate to login page
      router.push({ name: "login" });
    },
  },
  actions: {
    // Use actions purchase that check outs the cart
    async purchase({ state }) {
      // Simulate purchase transaction
      await new Promise((resolve) => setTimeout(resolve, 1000));
      state.cart = [];
    },

    // Authenticate user / Login
    async authenticate({ commit, state }, { username, password }) {
      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check if username and password are correct
      const loggedInUser = state.registeredUsers.find(
        (i) => i.username == username && i.password == password
      );

      // Check is loggedInUser is empty or not
      const isExisting = !loggedInUser ? false : true;

      // If loggedInUser is not empty
      if (isExisting) {
        // Set isAuthenticated to true
        localStorage.setItem("isAuthenticated", "true");
        // Navigate to home page
        router.push({ name: "home" });
        // Use authenticate mutation / Set authentication status
        commit("authenticate", isExisting);
      } else {
        // If loggedInUser is empty
        state.errorMsg = "Invalid username or password";
      }
    },
    // Sign up user
    async signUpUser({ commit }, { username: username, password: password }) {
      // Simulate sign up transaction
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Use signUpUser mutation
      commit("signUpUser", { username: username, password: password });
    },
    // Set search box value
    async updateSearchQuery({ commit }, query) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // Use setSearchQuery mutation
      commit("setSearchQuery", query);
    },
  },
  // Getters
  getters: {
    // Returns books array
    availableBooks: (state) => state.books,
    // Returns search box value
    searchQuery: (state) => state.searchQuery,
    // Returns cart array
    cartItems: (state) => state.cart,
    // Returns total price of books in cart
    totalPrice: (state) => {
      return state.cart.reduce((total, book) => total + book.price, 0);
    },
    // Filter/Search books in books array
    filteredBooks(state) {
      if (!state.searchQuery) {
        return state.books;
      }
      const query = state.searchQuery.toLowerCase();
      return state.books.filter((book) =>
        book.name.toLowerCase().includes(query)
      );
    },
  },
});
