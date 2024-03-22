<template>
  <main class="flex justify-center items-center min-h-navbar bg-accent">
    <div
      class="p-4 rounded-xl bg-white h-fit w-[20%] space-y-4 border-[1px] border-slate-400 shadow-md"
    >
      <h1 className="text-3xl font-bold text-center w-full py-2">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="py-4 px-6 w-full border-[1px] border-zinc-300 rounded-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="py-4 px-6 w-full border-[1px] border-zinc-300 rounded-full"
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
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    handleClick() {
      localStorage.setItem("token", "123");
      this.$router.push({ name: "home" });
    },
  },
};
</script>
