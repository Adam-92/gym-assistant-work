import { ResultsExercise } from "src/model/model";
import { updatePerformanceChartData } from "src/utils/Utils";

const usePerformanceChartData = (
  data: ResultsExercise[]
) => {
  const updatedData = updatePerformanceChartData(data);

  return {
    updatedData,
  };
};

export default usePerformanceChartData;
