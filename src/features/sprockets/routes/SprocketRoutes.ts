import type { RouteRecordRaw } from "vue-router";
import FindAllSprocketsContainer from "../find-all/FindAllSprocketsContainer.vue";

export default function sprocketRoutes(): RouteRecordRaw {
  return {
    path: "sprocket",
    component: FindAllSprocketsContainer,
  };
}
