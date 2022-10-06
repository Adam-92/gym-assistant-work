export interface NewUserExerciseAdded {
  name: {
    exerciseDescription: string;
    secondaryMuscle: string[];
    exampleImage: string;
    urlImage: string;
    part: string;
  }[];
}
