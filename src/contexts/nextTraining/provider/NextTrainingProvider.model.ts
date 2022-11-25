import { ReactNode } from "react";

export interface NextTrainingProviderProps {
  children: ReactNode;
}

export interface SelectedExercise {
  name: string;
  bodyPart: string;
}
