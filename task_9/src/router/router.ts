import { createRouter, createWebHistory } from "vue-router";

import SignUpPage from "@/pages/SignUpPage.vue";
import SignInPage from "@/pages/SignInPage.vue";
import CanvasPage from "@/pages/CanvasPage.vue";
import MainPage from "@/pages/MainPage.vue";

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
  if (to.meta.requiresAuth && !useAuthUser().isLoggedIn) {
    return {
      path: "/signin",
      query: { redirect: to.fullPath },
    };
  } else if (
    (to.path === "/signin" || to.path === "/signup") &&
    useAuthUser().isLoggedIn
  ) {
    router.push("/");
    return {
      path: "/",
    };
  }
});

export default router;
