import { minToHours } from "../../utils/Utils";
import { StatisticsTile } from "src/components/Tile/Tile.model";
import "./Tile.css";

const Statistics = ({ target, current, name }: StatisticsTile) => {
  const displayCurrent =
    name === "Training Time" ? minToHours(current) : current;

  const displayTarget = name === "Training Time" ? minToHours(target) : current;

  return (
    <div className="stats-tile">
      <div className="total-tile">
        <h3>Target: {displayTarget} </h3>
      </div>
      <div className="total-tile">
        <h3>Today:</h3>
        <span className="positive-tile">{displayCurrent}</span>
      </div>
    </div>
  );
};
export default Statistics;
