import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: null,
    user: null
  }),
  getters: {
    loggedIn(state): boolean {
      return state.token != null;
    },
  },
  actions: {
    changeToken(newToken: string) {
      this.token = newToken;
    },
  },
});
