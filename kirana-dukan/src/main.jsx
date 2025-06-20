import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import "./global.css";
import "./styles/flex.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
