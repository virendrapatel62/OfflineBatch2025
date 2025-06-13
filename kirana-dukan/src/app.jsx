import React from "react";
import NaviationProvider from "./navigation.provider";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <NaviationProvider></NaviationProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
