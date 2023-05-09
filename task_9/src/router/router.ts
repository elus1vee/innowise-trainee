import { createRouter, createWebHistory } from "vue-router";
import SignUpPage from "@/pages/SignUpPage.vue";
import SignInPage from "@/pages/SignInPage.vue";
import CanvasPage from "@/pages/CanvasPage.vue";
import MainPage from "@/pages/MainPage.vue";
import { authService } from "@/services/auth.service";

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

export default router;
