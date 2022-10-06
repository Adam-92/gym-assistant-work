import { minToHours } from "../../utils/Utils";
import { StatisticsTile } from "src/components/Tile/Tile.model";
import "./Tile.css"

const Statistics = ({ target, current, name }: StatisticsTile) => {
  if (name === "Training Time") {
    current = minToHours(current);
    target = minToHours(target);
  }

  return (
    <div className="stats-tile">
      <div className="total-tile">
        <h3>Target: {target} </h3>
      </div>
      <div className="total-tile">
        <h3>Today:</h3>
        <span className="positive-tile">{current}</span>
      </div>
    </div>
  );
};
export default Statistics;
