import { atom } from "recoil";

export const productsListingStore = atom({
  key: "productsListingStore",
  default: {
    products: [],
    isLoading: false,
    error: null,
  },
});
