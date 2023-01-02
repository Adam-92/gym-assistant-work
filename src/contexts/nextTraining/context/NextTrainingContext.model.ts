import { SelectedExercise } from "../provider/NextTrainingProvider.model";
import { LastTraining } from "src/pages/dashboard/components/NextTraining/NextTraining.model";
import { BodyPartContainerProps } from "src/pages/dashboard/components/NextTraining/NextTraining.model";

export interface NextTrainingContextValue {
  data?: BodyPartContainerProps[];
  isLoading: boolean;
  error: string;
  selectedExercise?: SelectedExercise;
  selectExercise: (selectedExercise: SelectedExercise) => void;
  lastTraining?: LastTraining;
  closePopover: () => void;
}
