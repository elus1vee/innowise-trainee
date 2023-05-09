import { createRouter, createWebHistory } from "vue-router";
import SignUpPage from "@/pages/SignUpPage.vue";
import SignInPage from "@/pages/SignInPage.vue";
import CanvasPage from "@/pages/CanvasPage.vue";
import MainPage from "@/pages/MainPage.vue";
import { authService } from "@/services/auth.service";
import { useAuthUser } from "@/stores/auth";

const routes = [
  {
    path: "/signup",
    component: SignUpPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signin",
    component: SignInPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/canvas",
    component: CanvasPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/canvas/:id",
    component: CanvasPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    component: MainPage,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  let isLoggedIn = false;
  authService.authStateChanged((user) => {
    if (user) isLoggedIn = true;
  });
  setTimeout(() => {
    if (to.meta.requiresAuth && !isLoggedIn) {
      return {
        path: "/signin",
        query: { redirect: to.fullPath },
      };
    }
    if ((to.path === "/signin" || to.path === "/signup") && isLoggedIn) {
      router.push("/");
      return {
        path: "/",
      };
    }
  }, 600);
});

authService.authStateChanged((user) => {
  if (user) {
    useAuthUser().setEmail(user.email);
  } else {
    router.push("/signin");
  }
});

export default router;
