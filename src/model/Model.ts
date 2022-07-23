import { User } from "firebase/auth";

export interface AppContextInterface {
  firebaseError: string | null;
  openModal: boolean;
  choosenFigure: string;
  setFirebaseError: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChoosenFigure: React.Dispatch<React.SetStateAction<string>>;
  currentUser: User | null;
}
export interface RouteInterface {
  path: string;
  element: () => JSX.Element;
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
export interface ViewExerciseIterface {
  name: null | string;
}
export interface SidebarTabs {
  id: number;
  name: string;
  icon: any;
  to: string;
  children?: SidebarTabsChildren[];
}

export interface SidebarTabsChildren {
  name: string;
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

export interface OutletExerciseCards {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  pickExercise: (exercise: string) => void;
}
