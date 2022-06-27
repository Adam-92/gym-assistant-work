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

