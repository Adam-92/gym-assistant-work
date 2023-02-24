import { UserContext } from "../context/UserContext";
import { UserProviderProps } from "./UserProvider.model";
import { useAuthListener } from "src/auth/hooks/useAuthListener";

export const UserProvider = ({ children }: UserProviderProps) => {
  const { isLoading, currentUser } = useAuthListener();

  return (
    <>
      {currentUser && (
        <UserContext.Provider value={{ currentUser, pending: isLoading }}>
          {children}
        </UserContext.Provider>
      )}
    </>
  );
};
