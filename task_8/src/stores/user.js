import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    email: "",
    calendarData: [],
    selectedDay: "",
    selectedTodo: {},
  }),

  actions: {
    fetchEmail() {
      firebase.auth().onAuthStateChanged((user) => {
        this.email = user.email;
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
    async addNewTodo(newTodo) {
      const newCalendarData = this.calendarData.map((el) => {
        if (el.fullDate === this.selectedDay) {
          if (el.todolist !== undefined) {
            el.todolist.push(newTodo);
          } else {
            el.todolist = [{ 1: "1" }];
            el.todolist[0] = newTodo;
          }
        }
        return el;
      });
      this.calendarData = newCalendarData;
      const uid = this.getUserId();
      await firebase
        .database()
        .ref(`/users/${uid}/todo`)
        .set(this.calendarData);
    },
    async editTodo(editedTodo) {
      const newCalendarData = this.calendarData.map((el) => {
        if (el.fullDate === this.selectedDay) {
          el.todolist = el.todolist.map((todo) => {
            if (todo === this.selectedTodo) {
              return editedTodo;
            } else {
              return todo;
            }
          });
        }
        return el;
      });
      this.calendarData = newCalendarData;
      const uid = this.getUserId();
      await firebase
        .database()
        .ref(`/users/${uid}/todo`)
        .set(this.calendarData);
    },
    async deleteTodo() {
      const newCalendarData = this.calendarData.map((el) => {
        if (el.fullDate === this.selectedDay) {
          el.todolist = el.todolist.filter((todo) => {
            if (todo !== this.selectedTodo) return todo;
          });
        }
        return el;
      });
      this.calendarData = newCalendarData;
      const uid = this.getUserId();
      await firebase
        .database()
        .ref(`/users/${uid}/todo`)
        .set(this.calendarData);
    },
  },
});
