import { createContext } from "react";
import { UserContextValue } from "./UserContext.model";

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);
