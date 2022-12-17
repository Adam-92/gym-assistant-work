import useFetchData from "./useFetchData";
import { updateCaloriesChartData } from "src/utils/Utils";
import { getCaloriesChartData } from "src/firebase/services/activity";

const useUpdatedCaloriesChartData = () => {
  const { data, isLoading, error } = useFetchData(getCaloriesChartData);
  const updatedData = updateCaloriesChartData(data);
  return { updatedData, isLoading, error, data };
};

export default useUpdatedCaloriesChartData;
