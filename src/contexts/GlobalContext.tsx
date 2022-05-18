import React, { useContext, createContext } from "react";

interface AppContextInterface {
  openModal: boolean;
  choosenFigure: string;
  setOpenModal: any;
  setChoosenFigure: any;
}

const AppContext = createContext<any | null>(null);

const AppProvider: React.FC = ({ children }) => {
  const value: AppContextInterface = {
    openModal: false,
    choosenFigure: "",
    setOpenModal: () => {},
    setChoosenFigure: () => {},
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
