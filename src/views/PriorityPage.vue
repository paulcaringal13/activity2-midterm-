<template>
  <NavbarComponent />
  <div className="min-h-fit max-h-full m-8 text-slate-800">
    <h1 className="text-2xl font-extrabold">Task Management Application</h1>
    <!-- Use numberOfPriorityTasks prop to display total number of priority tasks -->
    <h2 className="text-md font-normal mt-2">
      Total no. of priority tasks: {{ numberOfPriorityTasks }}
    </h2>
    <!-- Loop through the priorityTasks array and display each task -->
    <ul
      v-for="task in priorityTasks"
      :key="task.id"
      className="border-[1px] border-black bg-white my-3 p-3 rounded-lg h-fit shadow-md"
    >
      <li className="grid grid-cols-3 text-lg">
        <div className="col-span-3 flex justify-between">
          <div className="flex flex-row gap-2">
            <!-- If the task is a priority task, display "(Priority)" -->
            <strong>Title:</strong> {{ task.title }}
            <p v-if="task.isPriority === true">(Priority)</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="completed"
              v-model="task.isCompleted"
              className="h-4 w-4 mr-2"
            />
            <label for="completed" className="mr-4">Mark as Completed</label
            ><br />
          </div>
        </div>
        <div className="col-span-3">
          <strong>Description:</strong> {{ task.description }}
        </div>

        <div className="col-span-3 flex flex-row gap-2">
          <strong>
            Status:
            <span v-if="task.isCompleted === true" className="font-normal"
              >Completed</span
            >
            <span className="font-normal" v-else>Pending</span>
          </strong>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Define a prop of their type
  props: {
    priorityTasks: Array,
    numberOfPriorityTasks: Number,
  },
};
</script>
