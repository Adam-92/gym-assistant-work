import { useState, useEffect } from "react";
import { updateCaloriesChartData } from "src/utils/Utils";
import { getCaloriesChartData } from "src/firebase/services/Activity";
import { CaloriesChartData } from "../firebase/Firebase.model";
import { ChartData } from "chart.js";

const useCaloriesChartData = (initialData: ChartData<"line">) => {
  const [data, setData] = useState<CaloriesChartData["data"]>([]);
  console.log("🚀 ~ data", data)

  useEffect(() => {
    getCaloriesChartData().then((data: CaloriesChartData["data"]) =>
      setData(data)
    );
  }, []);

  const updatedData = updateCaloriesChartData(data, initialData);

  return { updatedData };
};

export default useCaloriesChartData;
