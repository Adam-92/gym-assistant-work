import { useState, useEffect } from "react";
import { updateCaloriesChartData } from "src/utils/Utils";
import { getCaloriesChartData } from "src/firebase/services/Activity";
import { CaloriesChartData } from "../firebase/Firebase.model";

const useCaloriesChartData = () => {
  const [data, setData] = useState<CaloriesChartData["data"]>([]);

  useEffect(() => {
    getCaloriesChartData().then((data: CaloriesChartData["data"]) =>
      setData(data)
    );
  }, []);

  const updatedData = updateCaloriesChartData(data);

  return { updatedData };
};

export default useCaloriesChartData;
