import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { canvasRouter } from "./module/canvas";
const pages = import.meta.glob("@pages/**/index.vue");
const routes: RouteRecordRaw[] = [];
for (let key in pages) {
  console.log({ key }, { name: /.*pages\/(\w*)\/index.vue/.exec(key)?.[1] });
  routes.push({
    path: `/${/.*pages\/(\w*)\/index.vue/.exec(key)?.[1] || ""}`,
    component: pages[key],
  });
}
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
