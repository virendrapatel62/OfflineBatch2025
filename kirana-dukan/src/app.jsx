import React from "react";
import NaviationProvider from "./navigation.provider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <NaviationProvider></NaviationProvider>
    </RecoilRoot>
  );
}
