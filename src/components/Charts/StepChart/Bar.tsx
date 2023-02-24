import { changeToPercent } from "src/pages/dashboard/utils/utils";
import { BarStepsProps } from "src/components/Charts/Charts.model";

const Bar = ({ day, steps, target }: BarStepsProps) => {
  const ratio = changeToPercent(steps, target);

  let height;
  let left;

  if (ratio >= 100) {
    height = 100;
    left = 13;
  }
  if (ratio < 100 && ratio > 0) {
    height = ratio;
    left = 21;
  }
  return (
    <div className="bar-container-step-chart">
      <div className="bar-step-chart ">
        <div
          className={`${ratio >= 80 && "position-static"} progress-step-chart`}
          style={{ height: `${height}%` }}
        >
          <span
            className={`${ratio >= 80 && "position-flat"} percent-step-chart`}
            style={{ left: `${left}%` }}
          >
            {ratio}%
          </span>
        </div>
      </div>
      <div className="day-month-step-chart">
        <span>{day}</span>
      </div>
    </div>
  );
};
export default Bar;
