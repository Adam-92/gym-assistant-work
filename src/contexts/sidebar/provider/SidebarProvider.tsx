import { SidebarContext } from "../context/SidebarContext";
import { SidebarProviderProps } from "./SidebarProvider.model";
import { useState, useCallback, useMemo } from "react";
import { SidebarContextValue } from "../context/SidebarContext.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = useCallback(() => setIsOpenSidebar(true), []);
  const closeSidebar = useCallback(() => setIsOpenSidebar(false), []);

  const params = useParams();

  const handleTogglerVisibilty = useCallback(() => {
    if (Object.keys(params).length < 2) {
      return (
        <FontAwesomeIcon
          icon={faBars}
          onClick={openSidebar}
          size="2x"
          className={`${isOpenSidebar && "off-toggler"} toggler-sidebar`}
        />
      );
    }

    return;
  }, [isOpenSidebar, openSidebar, params]);

  const value: SidebarContextValue = useMemo(
    () => ({
      isOpenSidebar,
      openSidebar,
      closeSidebar,
      handleTogglerVisibilty,
    }),
    [isOpenSidebar, closeSidebar, openSidebar, handleTogglerVisibilty]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
