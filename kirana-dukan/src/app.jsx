import React from "react";
import NaviationProvider from "./navigation.provider";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <RecoilRoot>
      <ToastContainer />
      <NaviationProvider></NaviationProvider>
    </RecoilRoot>
  );
}
