import { createRouter, createWebHistory } from "vue-router";
import LogInPage from "@/pages/LogInPage";
import SignInPage from "@/pages/SignInPage";
import ToDoPage from "@/pages/ToDoPage";
import ToDoUpdatePage from "@/pages/ToDoUpdatePage";

const routes = [
  {
    path: "/login",
    component: LogInPage,
  },
  {
    path: "/signin",
    component: SignInPage,
  },
  {
    path: "/todo",
    component: ToDoPage,
  },
  {
    path: "/todo_update",
    component: ToDoUpdatePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
