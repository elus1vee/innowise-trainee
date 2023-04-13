import { createApp } from "vue";
import App from "./App.vue";
import db from "./firebase.config";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import router from "./router/router";

async function getUsers(db) {
  let arr = [];
  const response = db.collection("users");
  const data = await response.get();
  data.docs.forEach((item) => {
    arr.push(item.data());
  });
  const answer = await firebase
    .auth()
    .signInWithEmailAndPassword("12345@gmail.com", "123456789");
  console.log(answer);
  console.log(arr);
}
getUsers(db);

const app = createApp(App);

app.use(router).mount("#app");
