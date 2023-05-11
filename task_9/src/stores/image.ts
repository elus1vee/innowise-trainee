import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { storageService } from "@/services/storage.service";
import { authService } from "@/services/auth.service";

export const useImageStore = defineStore("imageStore", {
  state: () => ({}),

  actions: {
    getUserId() {
      const uid = authService.getUserUid();
      if (uid) return uid;
    },
    async saveImg(img: Blob, email: string) {
      const date = Date.now();
      await storageService.saveImg(img, email, date);
    },
    async loadImg() {
      const list = await storageService.getImgList();

      const array = list.items.map((el) => {
        const name = el.name.split(".")[0];
        return { path: el.fullPath, name: name };
      });

      const object = await Promise.all(
        array.map(async (el) => {
          const metadata = await storageService.getImgMetaData(el.path);
          const url = await storageService.getImgUrl(el.path);
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
      const path = `/images/${name}.png`;
      return await storageService.getImgUrl(path);
    },
  },
});
