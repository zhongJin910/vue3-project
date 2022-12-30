import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/element",
    },
    {
      path: "/element",
      name: "element",
      component: () => import("../views/ElementView.vue"),
    },
    {
      path: "/method",
      name: "method",
      component: () => import("../views/MethodView.vue"),
    },
  ],
});

export default router;
