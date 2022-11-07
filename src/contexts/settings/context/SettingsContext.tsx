import { createContext } from "react";
import { SettingsContextValue } from "./SettingsContext.model";

export const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
);
