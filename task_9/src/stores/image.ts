import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const useImageStore = defineStore("imageStore", {
  state: () => ({}),

  actions: {
    getUserId() {
      const user = firebase.auth().currentUser;
      if (user) return user.uid;
    },
    async saveImg(img: Blob, email: string) {
      const date = Date.now();
      await firebase
        .storage()
        .ref(`/images/${date}.png`)
        .put(img, { customMetadata: { author: email } });
    },
    async loadImg() {
      const list = await firebase.storage().ref("/images/").list();

      const array = list.items.map((el) => {
        const name = el.name.split(".")[0];
        return { path: el.fullPath, name: name };
      });

      const object = await Promise.all(
        array.map(async (el) => {
          const metadata = await firebase.storage().ref(el.path).getMetadata();
          const url = await firebase.storage().ref(el.path).getDownloadURL();
          return {
            path: el.path,
            name: el.name,
            author: metadata.customMetadata?.author || "",
            url,
          };
        })
      );

      return object;
    },
    async getImgByName(name: string) {
      const url = await firebase
        .storage()
        .ref(`/images/${name}.png`)
        .getDownloadURL();
      return url;
    },
  },
});
