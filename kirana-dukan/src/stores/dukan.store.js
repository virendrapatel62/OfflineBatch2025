import { atom } from "recoil";

function getDefaultValue() {
  const aboutStoreString = localStorage.getItem("dukan-info");

  const emptyDefault = {
    storeName: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    logo: "",
    banner: "",
    description: "",
  };

  try {
    const value = JSON.parse(aboutStoreString);
    if (value) return value;
  } catch (error) {}

  return emptyDefault;
}

getDefaultValue();

export const dukanStore = atom({
  key: "about-store",
  default: getDefaultValue(),
});
