import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/Home/Home.page";
import LoginPage from "../pages/Login/Login.page";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetails.page";

export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}
