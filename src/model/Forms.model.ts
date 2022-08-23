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
  image: boolean;
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

export interface ExamplePicturesAddCatalogue{
  id: number;
  img: string;
  name: string;
}