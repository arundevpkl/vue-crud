import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/users",
    name: "users-list",
    component: () => import("./components/UserLists")
  },
  {
    path: "/users/:id",
    name: "edit-user",
    component: () => import("./components/EditUser")
  },



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;