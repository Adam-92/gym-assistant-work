import { AvailableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { SecondaryArrange } from "./secondaryArrange";

export type CatalogueNewExerciseFormValues = {
  name: string;
  part: AvailableBodyParts;
  secondaryMuscle: SecondaryArrange["name"][];
  exerciseDescription: string;
  exampleImage: undefined | string;
  urlImage: string;
};

export interface BodyParts {
  id: number;
  icon: string;
  name: AvailableBodyParts;
}

export interface ExamplePicturesAddCatalogue {
  id: number;
  img: string;
  name: string;
}
