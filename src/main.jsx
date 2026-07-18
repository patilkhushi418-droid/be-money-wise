import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { TransactionProvider } from "./context/TransactionContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TransactionProvider>
        <App />
      </TransactionProvider>
    </ThemeProvider>
  </React.StrictMode>
);