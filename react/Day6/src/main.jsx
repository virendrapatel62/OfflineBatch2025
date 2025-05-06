import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import StateExample from "./StateExample.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <App /> */}

    <StateExample />
  </div>
);
