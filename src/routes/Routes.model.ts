export interface RouteInterface {
  path: string;
  element: () => JSX.Element;
  children?: ChildrenRoute[];
}

export interface ChildrenRoute {
  path: string;
  element: () => JSX.Element;
  children?: SubChildren[];
}

export interface SubChildren {
  path: string;
  element: () => JSX.Element;
}
