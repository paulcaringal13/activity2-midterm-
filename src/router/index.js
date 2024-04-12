import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";

// Assign them to their specific routes and set the route guard
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isAuthenticated")) {
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
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isAuthenticated")) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUpPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isAuthenticated")) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
