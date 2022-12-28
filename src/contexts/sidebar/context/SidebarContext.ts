import { createContext } from "react";
import { SidebarContextValue } from "./SidebarContext.model";

export const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined
);
