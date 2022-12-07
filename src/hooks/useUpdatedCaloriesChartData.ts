import useFetchData from "./useFetchData";
import { updateCaloriesChartData } from "src/utils/Utils";
import { getCaloriesChartData } from "src/firebase/services/Activity";
const useUpdatedCaloriesChartData = () => {
  const { data, isLoading, isError } = useFetchData(getCaloriesChartData);
  const updatedData = updateCaloriesChartData(data);
  return { updatedData, isLoading, isError, data };
};

export default useUpdatedCaloriesChartData;
