export interface SidebarContextValue {
  isOpenSidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  handleTogglerVisibilty: () => JSX.Element | void;
}
