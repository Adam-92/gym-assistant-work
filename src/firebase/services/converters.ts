import { QueryDocumentSnapshot } from "firebase/firestore";
import {
  CaloriesChartData,
  StepChartData,
  TileData,
  CreateNewArrayExercises,
  GuageData,
} from "src/firebase/Firebase.model";

export const arrayNewExercises = {
  toFirestore: (data: CreateNewArrayExercises) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as CreateNewArrayExercises,
};

export const caloriesChartData = {
  toFirestore: (data: CaloriesChartData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as CaloriesChartData,
};

export const stepChartData = {
  toFirestore: (data: StepChartData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as StepChartData,
};

export const tileData = {
  toFirestore: (data: TileData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as TileData,
};

export const guagesData = {
  toFirestore: (data: GuageData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as GuageData,
};
