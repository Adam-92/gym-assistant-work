import { createContext, useState, useContext } from "react";
import { SettingsContextValue } from "./SettingContext.model";

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
);

const SettingsProvider = ({ children }: { children: JSX.Element }) => {
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

const useSettingsContext = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettingsContext can only be used inside UserProvider");
  }
  return ctx;
};

export { SettingsProvider, useSettingsContext, SettingsContext };
