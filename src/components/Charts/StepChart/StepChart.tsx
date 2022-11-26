import { StepsValues } from "src/components/Charts/Charts.model";
import Bar from "./Bar";
import Switch from "./Switch";
import useStepsChart from "src/hooks/useStepChart";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import "./StepChart.css";

const StepChart = () => {
  const { hookVariables, handleRequest } = useStepsChart();

  return (
    <DataStatusHandler
      isLoading={handleRequest.isLoading}
      isError={handleRequest.isError}
      data={handleRequest.data}
    >
      {handleRequest.data && (
        <article className="container-step-chart">
          <header className="header-step-chart">
            <h2>Steps: {hookVariables.target} / day</h2>
            <Switch
              period={hookVariables.period}
              monthlyPeriod={hookVariables.monthlyPeriod}
              weeklyPeriod={hookVariables.weeklyPeriod}
            />
          </header>
          <div
            className={`content-step-chart ${
              !hookVariables.period && "padding-step-chart"
            }`}
          >
            {handleRequest.data?.map(({ day, steps }: StepsValues) => {
              return (
                <Bar
                  key={day}
                  day={day}
                  steps={steps}
                  target={hookVariables.target}
                />
              );
            })}
          </div>
        </article>
      )}
    </DataStatusHandler>
  );
};
export default StepChart;
