import { useContext, createContext, useState } from "react";

interface AppContext {
  openModal: boolean,
  choosenFigure: string,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  setChoosenFigure: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext<AppContext>({
  openModal: true,
  choosenFigure: "",
  setOpenModal: () => {},
  setChoosenFigure: () => {}
});


const AppProvider: React.FC<{}> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [choosenFigure, setChoosenFigure] = useState<string>("");

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
