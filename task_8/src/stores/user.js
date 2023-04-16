import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    email: "",
  }),

  actions: {
    fetchEmail() {
      firebase.auth().onAuthStateChanged((user) => {
        this.email = user.email;
        console.log(this.getUserId());
      });
    },
    getUserId() {
      const user = firebase.auth().currentUser;
      return user.uid;
    },
  },
});
