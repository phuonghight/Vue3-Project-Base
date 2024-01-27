import { defineStore, acceptHMRUpdate } from "pinia";

import { authApi } from "@/api/auth.api";
import { LocalStorageConstant } from "@/constant/localStorage.constant";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: localStorage.getItem(LocalStorageConstant.accessToken) || "",
  }),
  getters: {
    loggedIn: ({ accessToken }) => !!accessToken,
  },
  actions: {
    async login({ email, password }) {
      try {
        const res = await authApi.login({ email, password });
        this.accessToken = res.data.data.accessToken;
        localStorage.setItem(
          LocalStorageConstant.accessToken,
          this.accessToken
        );
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    logout() {
      this.accessToken = "";
      localStorage.removeItem(LocalStorageConstant.accessToken);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
