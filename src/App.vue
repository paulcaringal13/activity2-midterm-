<template>
  <main className="min-h-screen text-slate-800 text-xl font-serif">
    <!-- Pass the datas and methods as props for other components to use -->
    <router-view
      :tasks="tasks"
      :completedTasks="completedTasks"
      :priorityTasks="priorityTasks"
      :deleteTask="deleteTask"
      :editTask="editTask"
      :addTask="addTask"
      :numberOfTasks="numberOfTasks"
      :numberOfCompletedTasks="numberOfCompletedTasks"
      :numberOfPriorityTasks="numberOfPriorityTasks"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      // Serve as the dummy tasks
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description for Task 1",
          isCompleted: false,
          isPriority: true,
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description for Task 2",
          isCompleted: true,
          isPriority: false,
        },
      ],
    };
  },
  methods: {
    addTask(newTask) {
      // Push the new task to tasks array
      this.tasks.push(newTask);

      // Return to the home page
      this.$router.replace("/");
    },
    editTask(editedTask, id) {
      // Loop through the tasks array to find the task to be edited
      this.tasks.forEach((task) => {
        // If the task id matches to the parameter "id" from route params
        if (task.id == id) {
          // Change the task properties
          task.title = editedTask.title;
          task.description = editedTask.description;

          // Return to the home page
          this.$router.replace("/");
        }
      });
    },
    deleteTask(index) {
      // Remove the element from the array
      this.tasks.splice(index, 1);
    },
  },
  computed: {
    // Return new array of completed tasks only
    completedTasks() {
      return this.tasks.filter((task) => task.isCompleted);
    },
    // Return new array of prioritized tasks only
    priorityTasks() {
      return this.tasks.filter((task) => task.isPriority);
    },
    // Return number of tasks
    numberOfTasks() {
      return this.tasks.length;
    },
    // Return number of completed tasks
    numberOfCompletedTasks() {
      return this.tasks.filter((task) => task.isCompleted).length;
    },
    // Return number of priority tasks
    numberOfPriorityTasks() {
      return this.tasks.filter((task) => task.isPriority).length;
    },
  },
};
</script>
