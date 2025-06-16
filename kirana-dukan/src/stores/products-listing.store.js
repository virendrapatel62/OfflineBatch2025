import { atom } from "recoil";

function getProductsFromLocal() {
  try {
    const products = JSON.parse(localStorage.getItem("homepage-products"));
    return products;
  } catch (error) {
    return [];
  }
}

export const productsListingStore = atom({
  key: "productsListingStore",
  default: {
    products: getProductsFromLocal(),
    isLoading: false,
    error: null,
  },
});
