import { createApp } from "vue";
import "./style.css";
import router from "./router/index.js";
import store from "./store/index.js";

// COMPONENTS
import App from "./App.vue";
import NavbarComponent from "./components/NavbarComponent.vue";

const app = createApp(App);

// Import globally for design purposes. If used inside the App Vue along with router-view, design is not maintained on the next render
app.component("NavbarComponent", NavbarComponent);

app.use(store).use(router).mount("#app");
