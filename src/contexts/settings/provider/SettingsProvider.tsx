import { useState } from "react";
import { SettingsContextValue } from "../context/SettingsContext.model";
import { SettingsProviderProps } from "./SettingsProvider.model";
import { SettingsContext } from "../context/SettingsContext";

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [showCatalogueExercises, setShowCatalogueExercises] = useState(true);

  const toggleShowCatalogueExercises = () =>
    setShowCatalogueExercises((prev: boolean) => !prev);

  const value: SettingsContextValue = {
    showCatalogueExercises,
    toggleShowCatalogueExercises,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
