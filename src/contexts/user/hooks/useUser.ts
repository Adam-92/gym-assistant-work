import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw Error("useUser can only be used inside UserProvider");
  }
  return ctx;
};
