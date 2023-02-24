import React from "react";
import ReactDOM from "react-dom";
import Router from "./routing/components/Router";
import "./theme/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
