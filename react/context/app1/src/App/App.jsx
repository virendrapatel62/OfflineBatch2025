import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Store from "./Store";
import Cart from "./Cart";
import ProductProvider from "./ProductProvider";
import CartProvider from "./CartProvider";

export default function App() {
  return (
    <div>
      <ProductProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/store" />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}
