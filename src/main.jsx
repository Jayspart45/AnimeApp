import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
import LoginProvider from "./components/Context/LoginProvider";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
    <Analytics />
  </React.StrictMode>
);
