import { UserContext } from "../context/UserContext";
import { UserContextValue } from "../context/UserContext.model";
import { UserProviderProps } from "./UserProvider.model";
import { User } from "firebase/auth";
import { auth } from "src/firebase/config/firebase";
import { useState, useEffect, useMemo } from "react";

export const UserProvider = ({ children }: UserProviderProps) => {
  //Tutaj wszystko ok z typami? User -> User | undefined
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Tutaj wszystko ok z typami? User -> User | null
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user ?? undefined);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: UserContextValue = useMemo(
    () => ({
      currentUser,
      pending: isLoading,
    }),
    [currentUser, isLoading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
