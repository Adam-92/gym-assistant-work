import Exercise from "./Exercise";
import { viewHistory, getItemCoordinates } from "../../utils/Utils";

const BodyPart = ({
  part,
  exercises,
  data,
  setLastTraining,
  setCoordinatesDOM,
  setShowHistoryPopover,
}: any) => {

  return (
    <div className="part-next-training">
      <h3>{part}</h3>
      <div
        className="exercises-next-training"
        onClick={(e) => {
          viewHistory(e, data, setLastTraining);
          getItemCoordinates(e, setCoordinatesDOM);
          setShowHistoryPopover(true);
        }}
      >
        {exercises.map((exercise: any, index: number) => {
          const { id, name, reps, sets } = exercise;
          const { repsMax, weightMax } = exercise.maximum;
          return (
            <Exercise
              id={id}
              name={name}
              reps={reps}
              sets={sets}
              repsMax={repsMax}
              weightMax={weightMax}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BodyPart;
