import FindAllSprocketsContainer from "@/features/sprockets/find-all/FindAllSprocketsContainer.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FindAllSprocketsContainer,
    },
  ],
});

export default router;
