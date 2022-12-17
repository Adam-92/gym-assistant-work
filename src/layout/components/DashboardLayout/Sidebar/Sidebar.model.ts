export type Tab = Omit<SidebarTabProps, "children" | "onClick"> & {
  childTabs?: ChildTabProps[];
};

export interface SidebarTabProps {
  name: string;
  icon: any;
  to: string;
  childTabs?: ChildTabProps[];
  onClick: (() => Promise<void>) | (() => void);
}

export interface ChildTabProps {
  name: string;
  to: string;
}
