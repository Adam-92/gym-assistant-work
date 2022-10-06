import { useEffect, useState } from "react";
import { getDailySteps, getMonthlySteps } from "../../../firebase/services/Activity";
import { StepsValues } from "src/components/Charts/Charts.model";
import Bar from "./Bar";
import Switch from "./Switch";
import "./StepChart.css";

const StepChart = () => {
  const [period, setPeriod] = useState(true);
  const [target, setTarget] = useState(12000);
  const [data, setData] = useState<StepsValues[] | undefined>([]);

  const requestData = async (
    getData: () => Promise<StepsValues[] | undefined>
  ) => {
    return getData().then((res: StepsValues[] | undefined) => setData(res));
  };

  useEffect(() => {
    if (period) {
      requestData(getDailySteps);
    } else {
      requestData(getMonthlySteps);
    }
  }, [period]);

  const monthlyPeriod = () => setPeriod(false);
  const weeklyPeriod = () => setPeriod(true);

  return (
    <article className="container-step-chart">
      <header className="header-step-chart">
        <h2>Steps: {target} / day</h2>
        <Switch
          period={period}
          monthlyPeriod={monthlyPeriod}
          weeklyPeriod={weeklyPeriod}
        />
      </header>
      <div className={`content-step-chart ${!period && "padding-step-chart"}`}>
        {data &&
          data.map(({ day, steps }: StepsValues) => {
            return <Bar key={day} day={day} steps={steps} target={target} />;
          })}
      </div>
    </article>
  );
};

export default StepChart;
