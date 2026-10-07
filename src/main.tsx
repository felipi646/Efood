import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { GlobalCss } from "./styles/global";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>,
);
