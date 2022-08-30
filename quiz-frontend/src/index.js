import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Questions from "./helpers/TempData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(Questions);
