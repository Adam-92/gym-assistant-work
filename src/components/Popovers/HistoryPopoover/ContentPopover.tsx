import { ContentPopoverProps } from "../Popovers.model";
import { Set } from "src/components/NextTraining/NextTraining.model";

const ContentPopover = ({
  lastTraining,
  selectedExercise,
}: ContentPopoverProps) => {
  return (
    <ul className="header-history-popover">
      {selectedExercise.name}
      <li> Date: {lastTraining.date} </li>
      {lastTraining.sets.map((set: Set, index: number) => {
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
