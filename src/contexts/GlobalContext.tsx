import { doc, onSnapshot } from "firebase/firestore";
import { db } from "src/config/firebase";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { AppContextInterface } from "src/model/Contexts.model";
import { User } from "firebase/auth";

const AppContext = createContext<any | null>(null);

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [firebaseError, setFirebaseError] = useState<string | null>("");
  const [openModal, setOpenModal] = useState(false);
  const [choosenFigure, setChoosenFigure] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setPending(true);
    });
    return unsubscribe;
  }, []);

  const unsubscribe = onSnapshot(
    doc(db, `users/${currentUser?.uid}`),
    (doc) => {
      console.log("Current data: ", doc.data());
    }
  );

  const value: AppContextInterface = {
    firebaseError,
    setFirebaseError,
    openModal,
    choosenFigure,
    setOpenModal,
    setChoosenFigure,
    currentUser,
  };

  return (
    <AppContext.Provider value={value}>
      {pending ? children : null}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
