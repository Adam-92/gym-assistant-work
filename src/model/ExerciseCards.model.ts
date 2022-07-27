export interface ArrangeMuslces {
  main: string;
  secondary: string[];
}

export interface Exercise {
  id: number;
  name: string;
  img: string;
  arrangeMuscles: ArrangeMuslces;
}

export interface ExerciseCardInterface {
    bodyPart: string;
    exercises: Exercise[];
  }

export interface ExerciseCardProps {
  exercises: Exercise[],
  pickExercise: (exercise: string) => void,
  closeModal: () => void
}
  