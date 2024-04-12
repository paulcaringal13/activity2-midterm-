<template>
  <NavbarComponent />
  <main
    className="flex justify-center items-center gap-20 min-h-navbar bg-secondary text-white font-barlow"
  >
    <div name="left" className="flex min-h-navbar w-full">
      <div
        className="flex flex-col h-fit w-fit space-y-4 my-auto ml-auto mr-10"
      >
        <h1 className="text-6xl w-[600px] ">Online Bookstore Application</h1>
        <h3 className="text-md w-[600px] text-description">
          An online bookstore application where students can browse, search, and
          purchase books.
        </h3>
      </div>
    </div>

    <div name="left" className="min-h-navbar w-full">
      <div
        className="flex flex-col h-fit w-fit my-auto ml-44 p-9 rounded-xl bg-foreground gap-2 shadow-lg"
      >
        <h2 className="mx-auto text-white font-bold text-xl">C2D Bookstore</h2>
        <h4 className="mx-auto text-sm text-description mb-4">
          Sign in your account!
        </h4>
        <label for="" className="text-description text-sm">Username</label>
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          className="py-2 px-4 rounded-full border-2 border-gray-400 focus:border-primary outline-none text-description text-sm shadow-lg text-slate-800"
        />
        <label for="" className="text-description text-sm">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          className="py-2 px-4 rounded-full border-2 border-gray-400 focus:border-primary outline-none text-description text-sm shadow-lg text-slate-800"
        />
        <p className="text-red-500 font-semibold text-sm">
          {{ $store.state.errorMsg }}
        </p>
        <button
          @click="$store.dispatch('authenticate', { username, password })"
          className="bg-primary hover:bg-primary/50 mt-4 py-2 rounded-full text-sm font-bold shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // Will be used as v-model
  computed: {
    // Serve as getters and setters for username and password
    username: {
      get() {
        return this.$store.state.username;
      },
      set(newValue) {
        this.$store.commit("setUsername", newValue);
      },
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(newValue) {
        this.$store.commit("setPassword", newValue);
      },
    },
  },
  // Reset the text fields
  mounted() {
    this.$store.commit("setErrorMsg", "");
    this.$store.commit("setUsername", "");
    this.$store.commit("setPassword", "");
  },
};
</script>
