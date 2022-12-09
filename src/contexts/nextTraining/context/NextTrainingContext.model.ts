import { SelectedExercise } from "../provider/NextTrainingProvider.model";
import { LastTraining } from "src/components/NextTraining/NextTraining.model";
import { BodyPartContainerProps } from "src/components/NextTraining/NextTraining.model";

export interface NextTrainingContextValue {
  data?: BodyPartContainerProps[];
  isLoading: boolean;
  isError: string;
  selectedExercise?: SelectedExercise;
  selectExercise: (selectedExercise: SelectedExercise) => void;
  lastTraining: LastTraining | undefined;
}
