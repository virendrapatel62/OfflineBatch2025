import React from "react";
import NaviationProvider from "./navigation.provider";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./stores/auth.store";
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <RecoilRoot>
      <ToastContainer />

      <NaviationProvider></NaviationProvider>
    </RecoilRoot>
  );
}
