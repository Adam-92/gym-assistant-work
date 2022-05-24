export interface SidebarTabs {
  id: number;
  name: string;
  active: boolean;
  icon: any;
  to: string;
}

export interface ErrorInterface {
  status: boolean;
  msg: string;
}
