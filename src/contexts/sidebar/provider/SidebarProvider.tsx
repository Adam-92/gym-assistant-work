import { SidebarContext } from "../context/SidebarContext";
import { SidebarProviderProps } from "./SidebarProvider.model";
import { useState, useCallback, useMemo } from "react";
import { SidebarContextValue } from "../context/SidebarContext.model";

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = useCallback(() => setIsOpenSidebar(true), []);
  const closeSidebar = useCallback(() => setIsOpenSidebar(false), []);

  const value: SidebarContextValue = useMemo(
    () => ({
      isOpenSidebar,
      openSidebar,
      closeSidebar,
    }),
    [isOpenSidebar, closeSidebar, openSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
