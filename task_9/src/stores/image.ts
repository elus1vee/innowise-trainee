import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const useImageStore = defineStore("imageStore", {
  state: () => ({}),

  actions: {
    getUserId() {
      const user = firebase.auth().currentUser;
      console.log(user);

      if (user) return user.uid;
    },
    async saveImg(img: Blob, email: string) {
      const date = Date.now();
      await firebase
        .storage()
        .ref(`/images/${date}.png`)
        .put(img, { customMetadata: { author: email } })
        .then((data) => console.log(data));
    },
    async loadImg() {
      const list = await firebase.storage().ref("/images/").list();
      const array = list.items.map((el) => {
        return { path: el.fullPath };
      });

      const object = await Promise.all(
        array.map(async (el) => {
          const metadata = await firebase.storage().ref(el.path).getMetadata();
          const url = await firebase.storage().ref(el.path).getDownloadURL();
          return {
            path: el.path,
            author: metadata.customMetadata?.author,
            url,
          };
        })
      );

      return object;
    },
    // async saveUserData() {
    //   const uid = this.getUserId();
    //   await firebase
    //     .database()
    //     .ref(`/users/${uid}/todo`)
    //     .set(this.calendarData);
    // },
  },
});
