export type Tab = Omit<SidebarTabProps, "onClick">;

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
