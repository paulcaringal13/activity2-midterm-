<template>
  <NavbarComponent />

  <section className="min-h-navbar items-center justify-center">
    <div
      className="flex flex-col gap-3 border-[1px] border-slate-700 rounded-xl p-5 w-[55%] h-fit"
    >
      <h1 className="text-2xl font-extrabold my-2">Add Task</h1>
      <label for="title" className="text-sm font-bold">Title:</label>
      <input
        v-model="newTask.title"
        placeholder="Enter Title"
        name="title"
        required
        className="h-10 p-4 text-sm font-bold border-[1px] border-slate-900 rounded"
      />
      <label for="description" className="text-sm font-bold"
        >Description:</label
      >
      <textarea
        v-model="newTask.description"
        placeholder="Enter Description"
        name="description"
        className="h-36 p-4 text-sm font-bold border-[1px] border-slate-900 rounded"
      />
      <div>
        <label for="priority" className="text-sm font-bold mr-2">
          Priority Task</label
        >
        <input type="checkbox" name="priority" v-model="newTask.isPriority" />
      </div>
      <div className="flex flex-row ml-auto w-fit gap-4">
        <!-- Returns to home page -->
        <router-link
          :to="'/'"
          className="py-2 px-4  rounded hover:bg-red-500 hover:text-white hover:border-b-4 hover:border-red-800"
          >Cancel</router-link
        >
        <!-- Add task -->
        <button
          @click="addTask(newTask)"
          className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-800 rounded"
        >
          Add
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Define a prop of their type
  props: {
    addTask: Function,
  },
  data() {
    return {
      // The new data to be passed to the addTask function
      newTask: {
        title: "",
        description: "",
        isPriority: false,
        isCompleted: false,
      },
    };
  },
};
</script>
