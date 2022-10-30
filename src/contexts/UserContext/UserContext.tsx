import { useContext, createContext, useState, useEffect } from "react";
import { UserContextValue } from "./UserContext.model";
import { auth } from "../../firebase/config/firebase";
import { User } from "firebase/auth";

const UserContext = createContext<UserContextValue | undefined>(undefined);

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setPending(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value: UserContextValue = {
    currentUser,
    pending
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUserContext can only be used inside UserProvider");
  }
  return ctx;
};

export { UserProvider, useUserContext, UserContext };
