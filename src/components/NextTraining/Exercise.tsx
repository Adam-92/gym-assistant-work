import { ExerciseProps } from "./NextTraining.model";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import { ExerciseInformation } from "./NextTraining.model";

const Exercise = ({ bodyPart, exercise }: ExerciseProps) => {
  const { selectExercise } = useNextTraining();

  const getRepsPerSetText = (exercise: ExerciseInformation) => {
    return `${exercise.reps} x ${exercise.sets}`;
  };
  const getBestRecordRepsPerSetText = (exercise: ExerciseInformation) => {
    return `BEST RECORD: ${exercise.repsMax} x ${exercise.weightMax}`;
  };

  return (
    <div
      className="exercise-next-training"
      onClick={() =>
        selectExercise({
          name: exercise.name,
          bodyPart: bodyPart,
        })
      }
    >
      <span>{exercise.id}</span>
      <div>
        <span>{exercise.name}</span>
        <span>{getRepsPerSetText(exercise)}</span>
      </div>
      <div>
        {exercise.lastTraining ? (
          <span>{getBestRecordRepsPerSetText(exercise)}</span>
        ) : (
          <span>NOT REGISTERED</span>
        )}
      </div>
    </div>
  );
};

export default Exercise;
