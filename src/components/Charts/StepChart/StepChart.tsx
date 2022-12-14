import Bar from "./Bar";
import Switch from "./Switch";
import useStepsChart from "src/hooks/useStepChart";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import "./StepChart.css";

const StepChart = () => {
  const {
    setMonthlyPeriod,
    setWeeklyPeriod,
    period,
    target,
    data,
    error,
    isLoading,
  } = useStepsChart();

  return (
    <DataStatusHandler isLoading={isLoading} error={error} data={data}>
      {(data) => (
        <article className="container-step-chart">
          <header className="header-step-chart">
            <h2>Steps: {target} / day</h2>
            <Switch
              period={period}
              setMonthlyPeriod={setMonthlyPeriod}
              setWeeklyPeriod={setWeeklyPeriod}
            />
          </header>
          <div className={`content-step-chart ${!period && "gap-step-chart"}`}>
            {data.map(({ day, steps }) => (
              <Bar key={day} day={day} steps={steps} target={target} />
            ))}
          </div>
        </article>
      )}
    </DataStatusHandler>
  );
};
export default StepChart;
