<template>
  <!-- If user is not authenticated / There is no logged in user-->
  <nav
    className="bg-secondary mx-auto px-6 py-3 drop-shadow-lg font-barlow"
    v-if="$store.state.isAuthenticated === false"
  >
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
          <router-link
            to="/sign-up"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >Sign Up</router-link
          >
        </ul>
      </div>
    </div>
    <div className="mobile-menu hidden md:hidden">
      <ul className="mt-4 space-y-4"></ul>
    </div>
  </nav>

  <!-- If user is authenticated  / There is a logged in user -->
  <nav
    className="bg-secondary mx-auto px-6 py-3 drop-shadow-lg"
    v-if="$store.state.isAuthenticated === true"
  >
    <div className="flex items-center justify-between mx-10">
      <div className="text-white font-bold text-xl">
        <!-- Name of our group and navigates also to home page -->
        <router-link to="/" className="my-2 ml-5 text-4xl font-bold"
          >C2D</router-link
        >
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <!-- Logout -->
          <button
            @click="$store.commit('logoutUser', $store.state.isAuthenticated)"
            className="text-white my-2 ml-5 text-xl font-bold relative inline cursor-pointer before:bg-white before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Logout
          </button>
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
};
</script>
