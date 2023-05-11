import { defineStore } from "pinia";

import { authService } from "@/services/auth.service";

export const useAuthUser = defineStore("authUser", {
  state: () => ({
    email: "",
    isLoggedIn: false,
  }),

  actions: {
    async logout(): Promise<void> {
      this.isLoggedIn = false;
      await authService.logOut();
    },
    signIn(email: string, password: string) {
      this.email = email;
      return authService.signIn(email, password);
    },
    signUp(email: string, password: string) {
      return authService.signUp(email, password);
    },
    authStateChanged(callback: (user: any) => void): void {
      authService.authStateChanged(callback);
    },
    setEmail(email: string) {
      this.email = email;
      console.log(this.email);
    },
    async checkIsLoggedIn() {
      // this.authStateChanged((user) => {
      //   if (user) this.isLoggedIn = true;
      // });
      await new Promise((resolve, reject) => {
        this.authStateChanged((user) => {
          resolve(user);
        });
      }).then((user: any) => {
        if (user) {
          this.isLoggedIn = true;
          this.email = user.email;
        }
      });
    },
  },
});
