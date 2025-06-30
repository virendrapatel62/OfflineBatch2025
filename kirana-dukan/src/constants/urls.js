export const API_BASE_URL = "https://kiranabe.onrender.com/api";
// export const API_BASE_URL = "http://localhost:4000/api";

export const Urls = {
  register: `${API_BASE_URL}/auth/register`,
  login: `${API_BASE_URL}/auth/login`,
  products: `${API_BASE_URL}/products`,
  productDetails: (id) => `${API_BASE_URL}/products/${id}`,

  placeOrder: `${API_BASE_URL}/orders`,

  orders: `${API_BASE_URL}/orders`,

  profile: `${API_BASE_URL}/users/profile`,
};
