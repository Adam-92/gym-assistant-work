import { ResultsExercise } from "src/model/model";
import { ChartData } from "chart.js";
import { updatePerformanceChartData } from "src/utils/Utils";

const usePerformanceChartData = (
  initialData: ChartData<"line">,
  data: ResultsExercise[]
) => {
  const updatedData = updatePerformanceChartData(data, initialData);

  return {
    updatedData,
  };
};

export default usePerformanceChartData;
