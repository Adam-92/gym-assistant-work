import { AvailableBodyParts } from "src/pages/catalogue/availableBodyParts";

export interface BodyPartContainerProps {
  bodyPart: AvailableBodyParts;
  exercises: ExerciseInformation[];
}

export interface ExerciseProps {
  bodyPart: AvailableBodyParts;
  exercise: ExerciseInformation;
}

export interface ExerciseInformation {
  id: number;
  name: string;
  reps: number;
  sets: number;
  repsMax: number;
  weightMax: number;
  lastTraining?: LastTraining;
}

export interface BodyPart {
  bodyPart: AvailableBodyParts;
  exercises: ExerciseInformation[];
}

export interface LastTraining {
  date: string;
  sets: Set[];
}

export interface Set {
  reps: number;
  weight: number;
}
