export interface NewUserExerciseAdded {
  userAddedExercises: {
    part: {
      name: string;
      tips: {
        tip: string;
      }[];
      secondaryMuscle: boolean | string[];
      exampleImage: undefined | string;
      cataloguePicture: any;
    }[];
  };
}
