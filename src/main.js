import { createApp } from "vue";
import "./style.css";
import router from "./router/index.js";

// COMPONENTS
import App from "./App.vue";
import TaskList from "./components/TaskList.vue";
import NavbarComponent from "./components/NavbarComponent.vue";

const app = createApp(App);

// Import TaskList and NavbarComponent component globally
app.component("TaskList", TaskList);
// Import globally for design purposes. If used inside the App Vue along with router-view, design is not maintained on the next render
app.component("NavbarComponent", NavbarComponent);

app.use(router).mount("#app");
