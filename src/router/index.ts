import GreetUser from "@/features/login/greet-user/GreetUser.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: GreetUser,
    },
  ],
});

export default router;
