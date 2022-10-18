import { createContext, useState, useContext } from "react";
import { SettingsContextInterface } from "./Contexts.model";

const SettingsContext = createContext<SettingsContextInterface | undefined>(
  undefined
);

const SettingsProvider = ({ children }: { children: JSX.Element }) => {
  const [showCatalogueExercises, setShowCatalogueExercises] = useState(true);

  const toggleShowCatalogueExercises = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCatalogueExercises((prev: boolean) => !prev);
  };

  const value: SettingsContextInterface = {
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
