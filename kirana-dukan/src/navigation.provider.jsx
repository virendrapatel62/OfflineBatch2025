import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home.page";
import Navbar from "./components/navbar/navbar.component";
import LoginPage from "./pages/login-page/login.page";
import RegisterPage from "./pages/register-page/register.page";
import ProductDetailsPage from "./pages/product-details/products-details.page";

export default function NaviationProvider() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Fragment>
  );
}
