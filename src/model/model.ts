import { AvailableBodyParts } from "src/pages/catalogue-page/availableBodyParts";

export interface NewExercise {
  name: string;
  exerciseDescription: string;
  secondaryMuscle: string[];
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
