import { useEffect, useState } from "react";
import { requestData } from "../../../utils/Utils";
import { getDailySteps, getMonthlySteps } from "../../../services/Activity";
import { StepChartInterface } from "src/model/StepChart.model";
import Bar from "./Bar";
import Switch from "./Switch";
import "./StepChart.css";

const StepChart = () => {
  const [changePeriod, setChangePeriod] = useState(true);
  const [target, setTarget] = useState(12000);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (changePeriod) {
      requestData(getDailySteps, setData);
    } else {
      requestData(getMonthlySteps, setData);
    }
  }, [changePeriod]);

  return (
    <article className="container-step-chart">
      <header className="header-step-chart">
        <h2>Steps: {target} / day</h2>
        <Switch changePeriod={changePeriod} setChangePeriod={setChangePeriod} />
      </header>
      <div
        className={`content-step-chart ${
          !changePeriod && "padding-step-chart"
        }`}
      >
        {data &&
          data.map(({ day, steps }: StepChartInterface) => {
            return <Bar key={day} day={day} steps={steps} target={target} />;
          })}
      </div>
    </article>
  );
};

export default StepChart;
