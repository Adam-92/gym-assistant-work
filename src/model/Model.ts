export interface SidebarTabs {
  id: number;
  name: string;
  icon: any;
  to: string;
}

export interface ErrorInterface {
  status: boolean;
  msg: string;
}

export interface ExerciseCardsInterface {
  bodyPart: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  img: string;
  arrangeMuscles: ArrangeMuslces;
}

export interface TrainingSet {
  reps: number;
  weight: number;
}

export interface ArrangeMuslces {
  main: string;
  secondary: string[];
}

export interface RouteInterface {
  path: string;
  element: () => JSX.Element;
}

export interface CarouselRouteInterface {
  routeIndex: number;
  setRouteIndex: React.Dispatch<React.SetStateAction<number>>;
  goLeftRoute: (index: number, setRouteIndex: React.Dispatch<React.SetStateAction<number>> ) => void;
  goRightRoute: (index: number, setRouteIndex: React.Dispatch<React.SetStateAction<number>> ) => void;
}

export interface ProtectedRoutes {
  path: string;
  element: () => JSX.Element;
  children?: RouteInterface[] | null;
}

export interface UnprotectedRoutes {
  path: string;
  element: () => JSX.Element;
}

export interface CharactersCarousel {
  name: string;
  description: string;
  img: string;
}

export interface StatisticsTile {
  target: number | string;
  current: number | string;
  name: string;
}
export interface StyleTile {
  backgroundIcon: string;
  backgroundHeader: string;
  backgroundContainer: string;
  borderColor: string;
}

export interface TileInterface {
  icon: JSX.Element;
  name: string;
  target: number | string;
  current: number | string;
  style: StyleTile;
}
