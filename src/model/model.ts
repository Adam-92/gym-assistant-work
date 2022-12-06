import { AvailableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { SecondaryArrange } from "src/components/Forms/secondaryArrange";

export interface NewExercise {
  name: string;
  exerciseDescription: string;
  /* Czy tak, może być?  W takiej formie, jak poniżej? */
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
