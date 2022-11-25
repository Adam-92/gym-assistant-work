import { LastTraining } from "../NextTraining/NextTraining.model";
import { SelectedExercise } from "src/contexts/nextTraining/provider/NextTrainingProvider.model";

export interface ContentPopoverProps {
  lastTraining: LastTraining | undefined;
  selectedExercise: SelectedExercise | undefined;
}
