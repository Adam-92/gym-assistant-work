import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/user/provider/UserProvider";
import { SettingsProvider } from "./contexts/settings/provider/SettingsProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SettingsProvider>
        <Router>
          <App />
        </Router>
      </SettingsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
