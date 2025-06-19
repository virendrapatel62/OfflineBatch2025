import { atom } from "recoil";

export const authStore = atom({
  key: "authStore",
  default: {
    user: null,
    token: null,
    isAuthenticated: false,
  },
});
