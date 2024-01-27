import { apiDefault } from "./axios";
export const authApi = {
  async login({ email, password }) {
    return apiDefault.post("login", { email, password });
  },
};
