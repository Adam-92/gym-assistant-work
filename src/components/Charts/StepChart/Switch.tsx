import { SwitchInterface } from "src/components/Charts/Charts.model";

const Switch = ({ period, monthlyPeriod, weeklyPeriod }: SwitchInterface) => {
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
