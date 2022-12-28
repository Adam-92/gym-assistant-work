import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw Error("useUserContext can only be used inside UserProvider");
  }
  return ctx;
};
