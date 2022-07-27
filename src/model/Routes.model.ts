export interface RouteInterface {
  path: string;
  element: () => JSX.Element
  children?: PrimaryChildren[] | null;
}

export interface PrimaryChildren {
  path: string,
  element: () => JSX.Element;
  children?: SecondaryChildren[] | null
}

export interface SecondaryChildren {
  path: string,
  element: () => JSX.Element
}

