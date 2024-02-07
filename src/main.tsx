import React from "react";
import ReactDOM from "react-dom/client";
import { RouteConfig } from "./routes/RouteConfig";

// Style
import "../src/assets/css/index.css";

// Render Dom
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Router Config  */}
    <RouteConfig />
  </React.StrictMode>
);
