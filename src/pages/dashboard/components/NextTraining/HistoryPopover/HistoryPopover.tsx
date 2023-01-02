import ContentPopover from "./ContentPopover";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import "./HistoryPopover.css";

const HistoryPopover = () => {
  const { lastTraining, selectedExercise } = useNextTraining();

  return (
    <article className="container-history-popover">
      {lastTraining && selectedExercise ? (
        <ContentPopover
          lastTraining={lastTraining}
          selectedExercise={selectedExercise}
        />
      ) : (
        <span>Make Your First Training!</span>
      )}
    </article>
  );
};

export default HistoryPopover;
