export interface CreateNewArrayExercises {
  exercises: NewExercise[];
}

export interface NewExercise {
  name: string;
  exerciseDescription: string;
  secondaryMuscle: string[];
  exampleImage: string;
  urlImage: string;
  part: string;
}
