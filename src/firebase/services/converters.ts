import { QueryDocumentSnapshot } from "firebase/firestore";
import { CreateNewArrayExercises } from "src/firebase/Firebase.model";
import { CaloriesChartData, StepChartData } from "src/firebase/Firebase.model";

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
