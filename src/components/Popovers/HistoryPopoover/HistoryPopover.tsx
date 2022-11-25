import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import ContentPopover from "./ContentPopover";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import "./HistoryPopover.css";

const HistoryPopover = () => {
  const { hookVariables } = useNextTraining();

  return (
    <article className="container-history-popover">
      {hookVariables.lastTraining ? (
        <ContentPopover
          lastTraining={hookVariables.lastTraining}
          selectedExercise={hookVariables.selectedExercise}
        />
      ) : (
        <span>Make Your First Training!</span>
      )}
      <FontAwesomeIcon
        icon={faCaretLeft}
        size="2x"
        className="position-arrow"
      />
    </article>
  );
};

export default HistoryPopover;
