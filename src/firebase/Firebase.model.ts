import { NewExercise } from "src/model/model";
import { CaloriesData } from "src/components/Charts/Charts.model";
import { StepsValues } from "src/components/Charts/Charts.model";

export interface CreateNewArrayExercises {
  exercises: NewExercise[];
}

export interface CaloriesChartData {
  data: CaloriesData[];
}

export interface StepChartData {
  weeklyData: StepsValues[];
  monthlyData: StepsValues[];
}
