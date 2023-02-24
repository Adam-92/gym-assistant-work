import Bar from "./Bar";
import Switch from "./Switch";
import useStepsChart from "src/pages/dashboard/hooks/useStepChart";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import Transition from "src/components/Transition/Transition";
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
        <Transition style={{ height: "100%" }}>
          <article className="container-step-chart">
            <header className="header-step-chart">
              <h2>Steps: {target} / day</h2>
              <Switch
                period={period}
                setMonthlyPeriod={setMonthlyPeriod}
                setWeeklyPeriod={setWeeklyPeriod}
              />
            </header>
            <div
              className={`content-step-chart ${!period && "gap-step-chart"}`}
            >
              {data.map(({ day, steps }) => (
                <Bar key={day} day={day} steps={steps} target={target} />
              ))}
            </div>
          </article>
        </Transition>
      )}
    </DataStatusHandler>
  );
};
export default StepChart;
