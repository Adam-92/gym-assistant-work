import { UserContext } from "../context/UserContext";
import { UserContextValue } from "../context/UserContext.model";
import { UserProviderProps } from "./UserProvider.model";
import { User } from "firebase/auth";
import { auth } from "src/firebase/config/firebase";
import { useState, useEffect } from "react";

export const UserProvider = ({ children }: UserProviderProps) => {
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
    pending,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
