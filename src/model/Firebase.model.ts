export interface NewUserExerciseAdded {
  name: {
    tips: {
      tip: string;
    }[];
    secondaryMuscle: boolean | string[];
    exampleImage: string;
    urlImage: string;
  }[];
}
