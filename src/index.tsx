import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./contexts/user/provider/UserProvider";
import { SettingsProvider } from "./contexts/settings/provider/SettingsProvider";
import Router from "./routing/components/Router";
import "./theme/global.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SettingsProvider>
        <Router />
      </SettingsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
