import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "@/views/LoginPage.vue";
import PriorityPage from "@/views/PriorityPage.vue";
import CompletedTaskPage from "@/views/CompletedTaskPage.vue";
import TaskEdit from "../components/TaskEdit.vue";
import TaskAdd from "../components/TaskAdd.vue";

// Assign them to their specific routes and set the route guard
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/priority",
    name: "priority",
    component: PriorityPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/completed",
    name: "completed",
    component: CompletedTaskPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: TaskEdit,
    props: true,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/add",
    name: "add",
    component: TaskAdd,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
