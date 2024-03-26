<template>
  <!-- If token is not present / There is no logged in user-->
  <nav className="bg-secondary mx-auto px-6 py-3" v-if="token === null">
    <div className="flex items-center justify-between mx-10">
      <div className="text-white font-bold text-xl">
        <router-link to="/" className="my-2 ml-5 text-4xl font-bold"
          >C2D</router-link
        >
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <!-- Navigate to login page -->
          <router-link
            to="/login"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >Login</router-link
          >
        </ul>
      </div>
    </div>
    <div className="mobile-menu hidden md:hidden">
      <ul className="mt-4 space-y-4"></ul>
    </div>
  </nav>
  <!-- If token is present  / There is a logged in user -->
  <nav className="bg-secondary mx-auto px-6 py-3" v-else>
    <div className="flex items-center justify-between mx-10">
      <div className="text-white font-bold text-xl">
        <!-- Name of our group and navigates also to home page -->
        <router-link to="/" className="my-2 ml-5 text-4xl font-bold"
          >C2D</router-link
        >
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <!--  Navigate to home page -->
          <router-link
            to="/"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Tasks</router-link
          >
          <!-- Navigate to Completed page -->
          <router-link
            to="/completed"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >Completed</router-link
          >
          <!-- Navigate to Priority page -->
          <router-link
            to="/priority"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >Priority</router-link
          >
          <!-- Logout -->
          <p
            @click="handleLogout"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Logout
          </p>
        </ul>
      </div>
    </div>
    <div className="mobile-menu hidden md:hidden">
      <ul className="mt-4 space-y-4"></ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    // Purpose is to change the Login and Logout buttons. Use is to change the navbar contents based on token
    return {
      token: null,
    };
  },
  methods: {
    // Logout the user and remove the token from local storage
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  // On mount check if token is present
  mounted() {
    if (localStorage.getItem("token")) {
      console.log("Token avail");
      this.token = localStorage.getItem("token");
    } else {
      console.log("Token not avail");
    }
  },
};
</script>
