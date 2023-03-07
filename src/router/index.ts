import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "@/views/Home/index.vue";
import About from "@/views/About/index.vue";
import AddPurchase from "@/views/AddPurchase/index.vue";
import Algorithm from "@/views/Algorithm/index.vue";

const routes = [
  {
    path: "/",
    component: Algorithm,
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
  // {
  //   path: "/algorithm",
  //   component: Algorithm,
  // },
];

const router = createRouter({
  //   history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
