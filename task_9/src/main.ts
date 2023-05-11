import App from "./App.vue";
import { createApp } from "vue";

import { createPinia } from "pinia";
import router from "./router/router";
import "@/plugins/firebase.config";

import "@/assets/css/style.css";

createApp(App).use(createPinia()).use(router).mount("#app");
