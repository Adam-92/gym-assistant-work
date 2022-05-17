import { calculateProgress } from "../../utils/Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import "./Guage.css";

interface Props {
  target: number,
  current: number,
  units: string
}

const Guage: React.FC<Props> = ({ target, current, units }) => {
  const angle = calculateProgress(current, target);

  return (
    <div className="box-guage">
      <div className="score-guage">
        <div className="data-guage">
          <p className="target-gauge">Target</p>
          <FontAwesomeIcon icon={faBullseye} className="icon-target-gauge" />
          <p>{target}</p>
          <p className="current-gauge">Current</p>
          <FontAwesomeIcon icon={faTurnUp} className="icon-current-gauge" />
          <p>
            {current} {units}
          </p>
        </div>
      </div>
      <div
        className="progress-guage"
        style={{ transform: `rotate(${angle}deg)` }}
      ></div>
    </div>
  );
};

export default Guage;
