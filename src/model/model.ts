import { AvailableBodyParts } from "src/pages/catalogue/availableBodyParts";
import { SecondaryArrange } from "src/pages/add-new-catalogue-exercise/secondaryArrange";

export interface NewExercise {
  name: string;
  exerciseDescription: string;
  secondaryMuscle: SecondaryArrange["name"][];
  exampleImage: string;
  urlImage: string;
  part: AvailableBodyParts;
  allUsers: boolean;
  results: ResultsExercise[];
}

export interface ResultsExercise {
  label: string;
  sets: ResultSets[];
}

export interface ResultSets {
  weight: number;
  reps: number;
}

export interface PerformanceProps {
  results: ResultsExercise[];
}
