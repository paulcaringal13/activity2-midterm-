<template>
  <nav
    className="flex bg-primary h-[100px] text-white items-center justify-between drop-shadow-md"
  >
    <h1 className="ms-5 my-2 text-3xl font-extrabold">Activity 3</h1>
    <ul className=" mr-5 my-2 text-lg font-bold">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/login">Login</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
