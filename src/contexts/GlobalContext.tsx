import { useContext, createContext, useState, useEffect } from "react";
import { AppContextInterface } from "src/contexts/Contexts.model";

import { auth } from "../firebase/config/firebase";
import { User } from "firebase/auth";

const AppContext = createContext<AppContextInterface | undefined>(undefined);

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setPending(true);
    });
    return unsubscribe;
  }, []);

  const value: AppContextInterface = {
    currentUser,
  };

  return (
    <AppContext.Provider value={value}>
      {pending ? children : null}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useGlobalContext can only be used inside AppProvider");
  }
  return ctx;
};

export { AppProvider, useGlobalContext, AppContext };
