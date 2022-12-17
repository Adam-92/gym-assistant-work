import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const useSettingsContext = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettingsContext can only be used inside SettingsProvider");
  }
  return ctx;
};
