import { createApp } from "vue";
import App from "./App.vue";

import components from "./components";

import "@/plugins/firebase.config";
import { loginCheck } from "./plugins/auth";

import { createPinia } from "pinia";
import router from "./router/router";

import "@/assets/css/style.css";

const app = createApp(App);

app.use(createPinia());

components.forEach((component) => {
  app.component(component.name, component);
});

loginCheck().then(() => {
  app.use(router).mount("#app");
});
