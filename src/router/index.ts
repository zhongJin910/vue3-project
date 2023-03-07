import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "@/views/Home/index.vue";
import About from "@/views/About/index.vue";
import AddPurchase from "@/views/AddPurchase/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    components: {
      nosroll: About,
    },
  },
  {
    path: "/add-purchase",
    component: AddPurchase,
  },
];

const router = createRouter({
  //   history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
