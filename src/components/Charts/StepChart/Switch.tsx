import { SwitchInterface } from "src/components/Charts/Charts.model";

const Switch: React.FC<SwitchInterface> = ({
  period,
  monthlyPeriod,
  weeklyPeriod
}) => {
  return (
    <div className="switch-step-chart">
      <button
        className={`${period && "active-step-chart"}`}
        onClick={weeklyPeriod}
      >
        Daily
      </button>
      <button
        className={`${!period && "active-step-chart"}`}
        onClick={monthlyPeriod}
      >
        Monthly
      </button>
    </div>
  );
};
export default Switch;
