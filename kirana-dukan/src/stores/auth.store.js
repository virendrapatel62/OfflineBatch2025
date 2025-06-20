import { atom } from "recoil";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("authorization");
};

export const logout = () => {
  localStorage.removeItem("authorization");
};

export const authStore = atom({
  key: "authStore",
  default: {
    token: getTokenFromLocalStorage(),
    isAuthenticated: !!getTokenFromLocalStorage(),
    saveTokenToLocalStorage: (token) => {
      localStorage.setItem("authorization", token);
    },
  },
});
