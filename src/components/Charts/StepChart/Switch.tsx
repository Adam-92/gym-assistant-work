import { SwitchProps } from "src/components/Charts/Charts.model";

const Switch = ({ period, setMonthlyPeriod, setWeeklyPeriod }: SwitchProps) => {
  return (
    <div className="switch-step-chart">
      <button
        className={`${period && "active-step-chart"}`}
        onClick={setWeeklyPeriod}
      >
        Daily
      </button>
      <button
        className={`${!period && "active-step-chart"}`}
        onClick={setMonthlyPeriod}
      >
        Monthly
      </button>
    </div>
  );
};
export default Switch;
