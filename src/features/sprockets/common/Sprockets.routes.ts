import type { RouteRecordRaw } from "vue-router";
import FindAllSprocketsContainer from "../find-all/FindAllSprocketsContainer.vue";

export const sprocketIndex = "sprocketIndex";

export const sprocketRoutes: RouteRecordRaw = {
  path: "sprocket",
  name: sprocketIndex,
  component: FindAllSprocketsContainer,
};
