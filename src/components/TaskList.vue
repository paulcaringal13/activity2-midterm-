<template>
  <ul
    v-for="(task, index) in tasks"
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
          <label for="completed" className="mr-[3.7rem]">Mark as Done</label
          ><br />
        </div>
      </div>
      <div className="col-span-3">
        <div className="col-span-3 flex justify-between">
          <div className="flex flex-row gap-2">
            <strong>Description:</strong> {{ task.description }}
          </div>
          <div>
            <input
              type="checkbox"
              name="completed"
              v-model="task.isPriority"
              className="h-4 w-4 mr-2"
            />
            <label for="completed">Mark as Priority Task</label><br />
          </div>
        </div>
      </div>
      <div className="col-span-3 mb-3 flex flex-row gap-2">
        <strong>
          Status:
          <!-- If the task is completed , display "(Completed)" -->
          <span v-if="task.isCompleted === true" className="font-normal"
            >Completed</span
          >
          <!-- If the task is not completed , display "(Pending)" -->
          <span className="font-normal" v-else>Pending</span>
        </strong>
      </div>
      <div className="col-span-3 space-x-5 mb-2 h-fit">
        <!-- Route to edit with a dynamic route that contains the task ID to specify which element to edit -->
        <router-link
          :to="'/edit/' + task.id"
          className="bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-800 rounded"
          >Edit Task</router-link
        >
        <!-- Delete task -->
        <button
          @click="deleteTask(index)"
          className="bg-red-500 text-white font-bold py-1 px-4 border-b-4 border-red-800 rounded"
        >
          Delete Task
        </button>
      </div>
    </li>
  </ul>
  <button
    className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-2"
  >
    <!-- For the animation -->
    <div
      className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"
    ></div>
    <!-- Route to add -->
    <router-link
      to="/add"
      className="relative text-black group-hover:text-white"
    >
      + Add Task</router-link
    >
  </button>
</template>

<script>
export default {
  // Define a prop of their type
  props: {
    tasks: Array,
    deleteTask: Function,
  },
};
</script>
