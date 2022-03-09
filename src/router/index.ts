import { createRouter, createWebHistory } from "vue-router";
import AccountView from "../views/AccountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "account",
      component: AccountView,
    },
    {
      path: "/bodyFormat/:id",
      name: "bodyFormat",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BodyFormat.vue"),
    },
  ],
});

export default router;
