import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/Home/Home.vue") },
  { path: "/favor", component: () => import("@/views/Favor/Favor.vue") },
  { path: "/message", component: () => import("@/views/Message/Message.vue") },
  { path: "/order", component: () => import("@/views/Order/Order.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
