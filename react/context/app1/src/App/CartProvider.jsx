import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext({});

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
