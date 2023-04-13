import { defineStore } from "pinia";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    auth: false,
    email: "",
  }),
  actions: {},
});
