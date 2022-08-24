import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type FormLogin = {
  email: string;
  password: string;
};

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
  re_password: string;
};

export interface CatalogueNewExerciseFormValues {
  name: string;
  part: boolean;
  secondaryMuscle: boolean;
  tips: string;
  exampleImage: boolean;
  cataloguePicture: any;
  detailsPicture: any;
}

export interface BodyParts {
  id: number;
  icon: string;
  name: string;
}

export interface Tip {
  tip: string;
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

export interface PictureSelection {
  id: number;
  name: string;
  icon: IconDefinition;
  text: string;
}
