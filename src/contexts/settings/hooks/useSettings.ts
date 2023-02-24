import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings can only be used inside SettingsProvider");
  }
  return ctx;
};
