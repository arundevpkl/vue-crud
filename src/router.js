import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/users",
    name: "users-list",
    component: () => import("./components/UserLists")
  },
 
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;