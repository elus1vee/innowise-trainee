import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    email: "",
    calendarData: [],
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
    async fetchCalendar() {
      const uid = this.getUserId();
      const calendarData = (
        await firebase.database().ref(`/users/${uid}/todo`).once("value")
      ).val();
      this.setCalendarData(calendarData);
    },
    setCalendarData(data) {
      this.calendarData = data;
    },
    clearState() {
      this.email = "";
      this.calendarData = [];
    },
    async logout() {
      const uid = this.getUserId();
      await firebase.auth().signOut();
      await firebase
        .database()
        .ref(`/users/${uid}/todo`)
        .set(this.calendarData);
      this.clearState();
    },
    async saveUserData() {
      const uid = this.getUserId();
      await firebase
        .database()
        .ref(`/users/${uid}/todo`)
        .set(this.calendarData);
      this.clearState();
    },
  },
});
