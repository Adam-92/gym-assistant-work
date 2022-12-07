import { SelectedExercise } from "../provider/NextTrainingProvider.model";
import { LastTraining } from "src/components/NextTraining/NextTraining.model";
import { BodyPartContainerProps } from "src/components/NextTraining/NextTraining.model";

export interface NextTrainingContextValue {
  data: BodyPartContainerProps[] | undefined;
  isLoading: boolean;
  isError: string;
  selectedExercise: SelectedExercise | undefined;
  selectExercise: (selectedExercise: SelectedExercise) => void;
  lastTraining: LastTraining | undefined;
}
