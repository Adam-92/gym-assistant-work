import "./StepChart.css";
import { useEffect, useState } from "react";
import { requestData } from "../../../utils/Utils";
import {
  getDailySteps,
  getMonthlySteps,
  exampleDays,
  exampleMonths,
} from "../../../services/Activity";
import Bar from "./Bar";
import Switch from "./Switch";

interface DataInterface {
  data: {
    day: string;
    steps: number;
  }[];
}

const StepChart = () => {
  const [changePeriod, setChangePeriod] = useState(true);
  const [target, setTarget] = useState(12000);
  const [data, setData] = useState<DataInterface["data"]>([
    {
      day: "",
      steps: 0,
    }
  ]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (changePeriod) {
      requestData(getDailySteps, exampleDays, setData, setError);
    } else {
      requestData(getMonthlySteps, exampleMonths, setData, setError);
    }
  }, [changePeriod]);

  return (
    <article className="container-step-chart">
      <header className="header-step-chart">
        <h2>Steps: {target} / day</h2>
        <Switch 
          changePeriod={changePeriod} 
          setChangePeriod={setChangePeriod} 
        />
      </header>
      <div
        className={`content-step-chart ${
          !changePeriod && "padding-step-chart"
        }`}
      >
        {data.map(({ day, steps }) => {
          return (
            <Bar 
              key={day} 
              day={day} 
              steps={steps} 
              target={target} 
            /> 
          );
        })}
      </div>
      {error && (
        <div className="error-step-chart">Unable to download the data...</div>
      )}
    </article>
  );
};

export default StepChart;
