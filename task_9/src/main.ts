import { createApp } from "vue";
import App from "./App.vue";

import "@/plugins/firebase.config";

import { createPinia } from "pinia";
import router from "./router/router";

import "@/assets/css/style.css";

createApp(App).use(createPinia()).use(router).mount("#app");
