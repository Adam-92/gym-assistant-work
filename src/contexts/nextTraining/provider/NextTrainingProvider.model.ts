import { ReactNode } from "react";
import { AvailableBodyParts } from "src/pages/catalogue/availableBodyParts";

export interface NextTrainingProviderProps {
  children: ReactNode;
}

export interface SelectedExercise {
  name: string;
  bodyPart: AvailableBodyParts;
}
