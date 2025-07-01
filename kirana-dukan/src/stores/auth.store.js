import { atom } from "recoil";
import { useRecoilState } from "recoil";
const getDataFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("authorization");
  const isAuthenticated = !!token;
  return { user, token, isAuthenticated };
};

export const logout = () => {
  localStorage.clear();
};

export const defaultAuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const authStore = atom({
  key: "authStore",

  default: {
    ...getDataFromLocalStorage(),
    persist(user, token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("authorization", token);
    },
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
});

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authStore);
  return auth;
};

export const useUser = () => {
  return useAuth().user;
};

export const useIsSeller = () => {
  return useAuth().user?.role?.toUpperCase() === "SELLER";
};
