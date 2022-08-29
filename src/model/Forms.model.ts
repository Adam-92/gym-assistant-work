export type FormLogin = {
  email: string;
  password: string;
};

export type FormRegister = {
  username: string;
  email: string;
  password: string;
  re_password: string;
};

export type CatalogueNewExerciseFormValues = {
  name: string;
  part: boolean;
  secondaryMuscle: boolean;
  tips: {
    tip: string
  }[];
  exampleImage: boolean;
  cataloguePicture: any;
};

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
