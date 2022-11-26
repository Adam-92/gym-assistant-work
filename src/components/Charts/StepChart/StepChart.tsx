import { StepsValues } from "src/components/Charts/Charts.model";
import Bar from "./Bar";
import Switch from "./Switch";
import useStepsChart from "src/hooks/useStepChart";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import useStepsChart from "src/hooks/useStepChart";
import "./StepChart.css";

const StepChart = () => {
  const hookVariabels = useStepsChart();

  return (
    <DataStatusHandler
      isLoading={hookVariabels.isLoading}
      isError={hookVariabels.isError}
      data={hookVariabels.data}
    >
      {hookVariabels.data && (
        <article className="container-step-chart">
          <header className="header-step-chart">
            <h2>Steps: {hookVariabels.target} / day</h2>
            <Switch
              period={hookVariabels.period}
              monthlyPeriod={hookVariabels.monthlyPeriod}
              weeklyPeriod={hookVariabels.weeklyPeriod}
            />
          </header>
          <div
            className={`content-step-chart ${
              !hookVariabels.period && "padding-step-chart"
            }`}
          >
            {hookVariabels.data?.map(({ day, steps }: StepsValues) => {
              return (
                <Bar
                  key={day}
                  day={day}
                  steps={steps}
                  target={hookVariabels.target}
                />
              );
            })}
          </div>
        </article>
      )}
    </DataStatusHandler>
  const hookVariabels = useStepsChart();
  /* 
      Wrapper do obslugi isLoading etc jest tutaj potrzebny
      Jest zapisany w branchu Charts selected exercise....
      Czyli będę mógł z niego skorzystać dopiero, jak go zmerguje do mastera?
    */
  return (
    <>
      {hookVariabels.data && (
        <article className="container-step-chart">
          <header className="header-step-chart">
            <h2>Steps: {hookVariabels.target} / day</h2>
            <Switch
              period={hookVariabels.period}
              monthlyPeriod={hookVariabels.monthlyPeriod}
              weeklyPeriod={hookVariabels.weeklyPeriod}
            />
          </header>
          <div
            className={`content-step-chart ${
              !hookVariabels.period && "padding-step-chart"
            }`}
          >
            {hookVariabels.data?.map(({ day, steps }: StepsValues) => {
              return (
                <Bar
                  key={day}
                  day={day}
                  steps={steps}
                  target={hookVariabels.target}
                />
              );
            })}
          </div>
        </article>
      )}
    </>
  );
};

export default StepChart;
