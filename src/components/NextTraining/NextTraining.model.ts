export interface BodyPartContainerProps {
  bodyPart: string;
  exercises: ExerciseInformation[];
}

export interface ExerciseProps {
  bodyPart: string;
  exercise: ExerciseInformation;
}

export interface ExerciseInformation {
  id: number;
  name: string;
  reps: number;
  sets: number;
  repsMax: number;
  weightMax: number;
  lastTraining?: LastTraining;
}

export interface BodyPart {
  part: string;
  exercises: ExerciseInformation[];
}

export interface LastTraining {
  date: string;
  sets: Set[];
}

export interface Set {
  reps: number;
  weight: number;
}
