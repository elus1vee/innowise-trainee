import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "@/firebase.config";
import "firebase/compat/firestore";
import router from "./router/router";
import "@/assets/css/style.css";
import { createPinia } from "pinia";

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(createPinia()).use(router).mount("#app");
  }
});
