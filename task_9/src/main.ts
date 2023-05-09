import { createApp } from "vue";
import App from "./App.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "@/firebase.config";
import "firebase/compat/firestore";
import router from "./router/router";
import "@/assets/css/style.css";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");
