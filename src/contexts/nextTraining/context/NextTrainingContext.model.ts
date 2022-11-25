import { SelectedExercise } from "../provider/NextTrainingProvider.model";
import { DocumentData } from "firebase/firestore";
import { LastTraining } from "src/components/NextTraining/NextTraining.model";

export interface NextTrainingContextValue {
  hookVariables: HookVariables;
  handleRequest: HandleRequest;
}

export interface HookVariables {
  selectedExercise: SelectedExercise | undefined;
  selectExercise: (selectedExercise: SelectedExercise) => void;
  lastTraining: LastTraining | undefined;
}

export interface HandleRequest {
  data: DocumentData | undefined;
  isLoading: boolean;
  isError: string;
}
