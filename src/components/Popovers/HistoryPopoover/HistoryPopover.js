import { useRef, useEffect, useState } from "react";
import { calculatePopoverCoordinates } from "../../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import ContentPopover from "./ContentPopover";
import "./HistoryPopover.css";

const HistoryPopover = ({ lastTraining, coordinatesDOM }) => {
  const [position, setPosition] = useState({
    top: 400,
    left: 1160,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const coordinatesPopover = containerRef.current.getBoundingClientRect();
    const positionTopLeft = calculatePopoverCoordinates(
      coordinatesDOM,
      coordinatesPopover
    );
    setPosition(positionTopLeft);
  }, [lastTraining]);

  return (
    <article
      className="container-history-popover"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      ref={containerRef}
    >
      {lastTraining.training ? (
        <ContentPopover lastTraining={lastTraining} />
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
