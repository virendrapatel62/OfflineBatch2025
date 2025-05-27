import React from "react";
import Navigation from "./navigation/Navigation";
import { BrowserRouter } from "react-router";
import Navbar from "./components/Navbar/Navbar.component";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Navigation />
      </main>
    </BrowserRouter>
  );
}
