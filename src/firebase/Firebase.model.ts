import { NewExercise } from "src/model/model";
import { CaloriesData } from "src/components/Charts/Charts.model";
import { StepsValues } from "src/components/Charts/Charts.model";
import { TileProps } from "src/components/Tile/Tile.model";
import { GuageProps } from "src/components/Guage/Guage.model";
import { BodyPartContainerProps } from "src/components/NextTraining/NextTraining.model";

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
