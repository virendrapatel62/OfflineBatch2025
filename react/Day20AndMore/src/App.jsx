import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import NewsHome from "./pages/NewsHome";
import NewsDetails from "./pages/NewsDetails";
import NewsDetailsNormalVariable from "./pages/NewsDetailsNormalVariable";
import Assignment1 from "./assignment1/Assignment1";

function App() {
  return <Assignment1 />;
  // return (
  //   <Router>
  //     <NavBar />
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/about" element={<AboutPage />} />
  //       <Route path="/news" element={<NewsHome />} />
  //       <Route
  //         path="/news/:year/:month/:day"
  //         element={<NewsDetailsNormalVariable />}
  //       />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
