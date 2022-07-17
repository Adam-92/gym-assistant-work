import { TrainingSet } from "src/model/Model";

const ContentPopover = ({ lastTraining }: any) => {
  const { exerciseName, training } = lastTraining;
  const { date } = training;

  return (
    <ul className="header-history-popover">
      {exerciseName}
      <li> Date: {date} </li>
      {training.sets.map((set: TrainingSet, index: number) => {
        return (
          <li key={index}>
            {index + 1} set - {set.weight}kg x {set.reps}
          </li>
        );
      })}
    </ul>
  );
};
export default ContentPopover;
