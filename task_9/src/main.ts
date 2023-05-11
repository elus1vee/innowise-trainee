import { createApp } from "vue";
import App from "./App.vue";

import components from "./components";

import "@/plugins/firebase.config";

import { createPinia } from "pinia";
import router from "./router/router";

import "@/assets/css/style.css";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(createPinia()).use(router).mount("#app");
