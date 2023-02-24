import useFetchData from "../../../hooks/useFetchData";
import { updateCaloriesChartData } from "src/utils/Utils";
import { getCaloriesChartData } from "src/firebase/services/dashboardActivity";

const useUpdatedCaloriesChartData = () => {
  const { data, isLoading, error } = useFetchData(getCaloriesChartData);
  const updatedData = updateCaloriesChartData(data);

  return { updatedData, isLoading, error, data };
};

export default useUpdatedCaloriesChartData;
