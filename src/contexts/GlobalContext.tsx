import { useContext, createContext, useState } from "react";

interface AppContextInterface {
  openModal: boolean;
  choosenFigure: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChoosenFigure: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<any | null>(null);

const AppProvider: React.FC = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [choosenFigure, setChoosenFigure] = useState("");

  const value: AppContextInterface = {
    openModal,
    choosenFigure,
    setOpenModal,
    setChoosenFigure
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
