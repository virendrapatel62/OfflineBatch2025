import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home.page";
import Navbar from "./components/navbar/navbar.component";
import LoginPage from "./pages/login-page/login.page";
import RegisterPage from "./pages/register-page/register.page";

export default function NaviationProvider() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
