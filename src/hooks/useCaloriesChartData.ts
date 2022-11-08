import { useState, useEffect } from "react";
import { updateCaloriesChartData } from "src/utils/Utils";
import { CaloriesData } from "src/components/Charts/Charts.model";
import { ChartData } from "chart.js";

//Hmm z tym request? Typ "any" ?
const useCaloriesChartData = (initialData: ChartData<"line">, request: any) => {
  const [data, setData] = useState<CaloriesData[]>([]);

  useEffect(() => {
    request().then((data: CaloriesData[]) => setData(data));
  }, [request]);

  const updatedData = updateCaloriesChartData(data, initialData);

  return { updatedData };
};

export default useCaloriesChartData;
