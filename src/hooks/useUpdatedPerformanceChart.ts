import { updatePerformanceChartData } from "src/utils/Utils";
import { ResultsExercise } from "src/model/model";

const useUpdatedPerformanceChart = (results: ResultsExercise[]) => {
  const updatedData = updatePerformanceChartData(results);
  return { updatedData };
};

export default useUpdatedPerformanceChart;
