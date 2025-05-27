import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/Home/Home.page";
import LoginPage from "../pages/Login/Login.page";

export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
