<template>
  <NavbarComponent />
  <div className="min-h-fit max-h-full m-8 text-slate-800">
    <h1 className="text-2xl font-extrabold">Task Management Application</h1>
    <div className="w-full flex flex-row justify-between">
      <!-- Use numberOfTasks prop to display total number of tasks -->
      <h2 className="text-md font-normal mt-2">
        Total no. of tasks: {{ numberOfTasks }}
      </h2>
      <!-- Use numberOfCompletedTasks prop to display total number of completed tasks -->
      <h2>
        Total no. completed of tasks:
        {{ numberOfCompletedTasks }}
      </h2>
    </div>

    <!-- Pass the tasks array from App component and deleteTask function from App component as props -->
    <TaskList :tasks="tasks" :deleteTask="deleteTask" />
  </div>
</template>

<script>
export default {
  // Define a prop of their type
  props: {
    tasks: Array,
    numberOfTasks: Number,
    numberOfCompletedTasks: Number,
    deleteTask: Function,
  },
};
</script>
