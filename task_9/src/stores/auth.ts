import { defineStore } from "pinia";

import { authService } from "@/services/auth.service";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    email: "",
  }),

  actions: {
    async logout() {
      await authService.logOut();
    },
    signIn(email: string, password: string) {
      this.email = email;
      return authService.signIn(email, password);
    },
    signUp(email: string, password: string) {
      return authService.signUp(email, password);
    },
    authStateChanged(callback: (user: any) => void) {
      authService.authStateChanged(callback);
    },
    setEmail(email: string) {
      this.email = email;
    },
  },
});
