import { atom } from "recoil";

export const dukanStore = atom({
  key: "about-store",
  default: {
    storeName: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    logo: "",
    banner: "",
    description: "",
  },
});
