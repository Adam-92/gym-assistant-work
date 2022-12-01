import { useState, useEffect, useCallback } from "react";
import { updateCaloriesChartData } from "src/utils/Utils";
import { getCaloriesChartData } from "src/firebase/services/Activity";
import { CaloriesChartData } from "../firebase/Firebase.model";
import { parseError } from "src/errors/parseError";

const useCaloriesChartData = () => {
  const [data, setData] = useState<CaloriesChartData["data"] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const request = await getCaloriesChartData();

      if (request.exists()) {
        setData(request.data().data);
      } else setData(undefined);
    } catch (error) {
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updatedData = updateCaloriesChartData(data);

  return { updatedData, data, isLoading, isError };
};

export default useCaloriesChartData;
