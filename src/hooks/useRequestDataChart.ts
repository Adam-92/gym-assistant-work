import { useState, useEffect } from "react";
import { updateChartData } from "src/utils/Utils";
import { CaloriesData } from "src/components/Charts/Charts.model";
import { ChartData } from "chart.js";

//InitialData to typ ChartData import u góry

//Hmm z tym request? Typ "any" ?
const useNoRequestDataChart = (
  initialData: ChartData,
  request: any
) => {
  const [data, setData] = useState({
    0: [2000, 2000, 2000, 2000, 2000, 2000, 2000],
    1: [1500, 3200, 2000, 1200, 3500, 800, 2900],
  });

  useEffect(() => {
    request().then((data: CaloriesData) => setData(data));
  }, [request]);

  const updatedData = updateChartData(data, initialData);

  return { updatedData };
};

export default useNoRequestDataChart;
