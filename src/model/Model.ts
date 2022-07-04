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

export interface ArrangeMuslces {
  main: string;
  secondary: string[];
}

export interface ChildrenRoute {
  path: string;
  element: () => JSX.Element;
}

export interface ProtectedRoutes {
  path: string;
  element: () => JSX.Element;
  children?: ChildrenRoute | null;
}

export interface CharactersCarousel{
  name: string;
  description: string;
  img: string;
}

