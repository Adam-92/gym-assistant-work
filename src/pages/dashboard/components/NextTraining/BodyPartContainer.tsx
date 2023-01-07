import Exercise from "./Exercise";
import {
  BodyPartContainerProps
} from "./NextTraining.model";

const BodyPartContainer = ({ bodyPart, exercises }: BodyPartContainerProps) => {
  return (
    <div className="part-next-training">
      <h3>{bodyPart}</h3>
      <div className="exercises-next-training">
        {exercises.map((exercise, index) => (
          <Exercise bodyPart={bodyPart} exercise={exercise} key={index} />
        ))}
      </div>
    </div>
  );
};
export default BodyPartContainer;
