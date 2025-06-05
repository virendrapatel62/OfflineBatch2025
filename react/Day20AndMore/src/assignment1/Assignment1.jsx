import React from "react";
import Products from "./Products";
import Cart from "./Cart";
import { useState } from "react";

export default function Assignment1() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { product: { ...product }, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.product.id !== product.id));
  }

  return (
    <div style={{ display: "flex" }}>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <Products onAddToCart={addToCart} products={products} />
      <Cart onRemoveFromCart={removeFromCart} cart={cart} />
    </div>
  );
}
