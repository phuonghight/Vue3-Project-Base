import { createRouter, createWebHistory } from "vue-router";

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";
import { auth } from "@/middlewares";

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(auth);
router.afterEach((to) => {
  document.title = "Food Order - " + to.name;
});

export default router;
