import { NewExercise } from "src/model/model";
import { CaloriesData } from "src/components/Charts/Charts.model";
import { StepsValues } from "src/components/Charts/Charts.model";
import { TileProps } from "src/pages/dashboard/Tile/Tile.model";
import { GuageProps } from "src/pages/dashboard/Guage/Guage.model";
import { BodyPartContainerProps } from "src/pages/dashboard/NextTraining/NextTraining.model";

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

export interface TileData {
  data: TileProps[];
}

export interface GuageData {
  data: GuageProps[];
}

export interface NextTrainingData {
  data: BodyPartContainerProps[];
}
