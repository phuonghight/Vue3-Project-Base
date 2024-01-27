import { useAuthStore } from "@/stores/auth.js";

export const auth = (to, from, next) => {
  const authStore = useAuthStore();
  if (!!to.meta.requiresAuth && !authStore.loggedIn) {
    return next("/login?redirect=" + to.path);
  }
  return next();
};
