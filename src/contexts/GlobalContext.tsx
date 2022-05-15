import { useContext, createContext, useState } from "react";

const AppContext = createContext({});

const AppProvider: React.FC = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [choosenFigure, setChoosenFigure] = useState<boolean>(false);

  const value = {
    openModal,
    choosenFigure,
    setOpenModal,
    setChoosenFigure,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
