import { useState, useEffect } from "react";
import { updateCaloriesChartData } from "src/utils/Utils";
import { CaloriesData } from "src/components/Charts/Charts.model";
import { getCaloriesChartData } from "src/firebase/services/Activity";
import { ChartData } from "chart.js";

const useCaloriesChartData = (initialData: ChartData<"line">) => {
  const [data, setData] = useState<CaloriesData[]>([]);

  useEffect(() => {
    getCaloriesChartData().then((data: CaloriesData[]) => setData(data));
  }, []);

  const updatedData = updateCaloriesChartData(data, initialData);

  return { updatedData };
};

export default useCaloriesChartData;
