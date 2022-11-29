import { AvailableBodyParts } from "src/pages/catalogue-page/availableBodyParts";

export type CatalogueNewExerciseFormValues = {
  name: string;
  part: AvailableBodyParts;
  secondaryMuscle: string[];
  exerciseDescription: string;
  exampleImage: undefined | string;
  urlImage: string;
};

export interface BodyParts {
  id: number;
  icon: string;
  name: AvailableBodyParts;
}

export interface SecondaryMuscles {
  id: number;
  name: string;
}

export interface ExamplePicturesAddCatalogue {
  id: number;
  img: string;
  name: string;
}
