import { ExerciseProps } from "./NextTraining.model";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";

const Exercise = ({ bodyPart, exercise }: ExerciseProps) => {
  const { hookVariables } = useNextTraining();

  return (
    <div
      className="exercise-next-training"
      onClick={() =>
        hookVariables.selectExercise({
          name: exercise.name,
          bodyPart: bodyPart,
        })
      }
    >
      <span>{exercise.id}</span>
      <div>
        <span>{exercise.name}</span>
        <span>
          {exercise.reps} x {exercise.sets}
        </span>
      </div>
      <div>
        {exercise.lastTraining ? (
          <span>
            BEST RECORD: {exercise.repsMax} x {exercise.weightMax}
          </span>
        ) : (
          <span>NOT REGISTERED</span>
        )}
      </div>
    </div>
  );
};

export default Exercise;
