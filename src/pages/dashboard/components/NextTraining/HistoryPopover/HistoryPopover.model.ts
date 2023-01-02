import { LastTraining } from "../NextTraining.model";
import { SelectedExercise } from "src/contexts/nextTraining/provider/NextTrainingProvider.model";

export interface ContentPopoverProps {
  lastTraining: LastTraining;
  selectedExercise: SelectedExercise;
}
