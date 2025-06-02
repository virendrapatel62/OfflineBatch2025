import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/Home/Home.page";
import LoginPage from "../pages/Login/Login.page";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetails.page";
import CalcuatorPage from "../pages/Examples/v1/Calculator.page";
import CalcuatorResultPage from "../pages/Examples/v1/CalculatorResult.page";
import CalcuatorPageV2 from "../pages/Examples/v2/Calculator.page";
import CalcuatorResultPageV2 from "../pages/Examples/v2/CalculatorResult.page";
import CalcuatorPageV3 from "../pages/Examples/v3/Calculator.page";
import CalcuatorResultPageV3 from "../pages/Examples/v3/CalculatorResult.page";

export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/calculator" element={<CalcuatorPage />} />
        <Route path="/calculator/result" element={<CalcuatorResultPage />} />

        <Route path="/v2/calculator" element={<CalcuatorPageV2 />} />
        <Route
          path="/v2/calculator/:operation"
          element={<CalcuatorResultPageV2 />}
        />

        <Route path="/v3/calculator" element={<CalcuatorPageV3 />} />
        <Route
          path="/v3/calculator/:operation/:number1/:number2"
          element={<CalcuatorResultPageV3 />}
        />
      </Routes>
    </div>
  );
}
