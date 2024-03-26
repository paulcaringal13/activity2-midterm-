<template>
  <NavbarComponent />
  <main className="flex justify-center items-center min-h-navbar">
    <div
      className="p-4 rounded-xl bg-white h-fit w-[20%] space-y-4 border-[1px] border-slate-400 shadow-md"
    >
      <h1 className="text-3xl font-bold text-center w-full py-2">
        C2D Task Management
      </h1>
      <input
        type="text"
        placeholder="Username"
        className="py-4 px-6 w-full border-[1px] border-zinc-300 rounded-full text-sm"
      />
      <input
        type="password"
        placeholder="Password"
        className="py-4 px-6 w-full border-[1px] border-zinc-300 rounded-full text-sm"
      />
      <button
        @click="handleClick"
        className="bg-secondary p-3 w-full rounded-full text-white hover:bg-secondary/75"
      >
        Login
      </button>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    // Set a new local storage item token after logging in and route to home page
    handleClick() {
      localStorage.setItem("token", "123");
      this.$router.push({ name: "home" });
    },
  },
};
</script>
