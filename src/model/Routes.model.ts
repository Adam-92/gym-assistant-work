export interface RouteInterface {
  path: string;
  element: () => JSX.Element
  children?: ChildrenRoute[] | null;
}

export interface ChildrenRoute {
  path: string,
  element: () => JSX.Element;
}

