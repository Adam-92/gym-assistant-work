import { useState, useCallback, useEffect } from "react";
import { StepsValues } from "src/components/Charts/Charts.model";
import { parseError } from "src/errors/parseError";
import {
  getWeeklySteps,
  getMonthlySteps,
} from "src/firebase/services/Activity";

const useStepChart = () => {
  const [period, setPeriod] = useState(true);
  const [target, setTarget] = useState(12000);
  const [data, setData] = useState<StepsValues[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const setMonthlyPeriod = useCallback(() => setPeriod(false), []);
  const setWeeklyPeriod = useCallback(() => setPeriod(true), []);

  const fetchData = useCallback(async () => {
    try {
      if (period) {
        const data = (await getWeeklySteps()).data();
        setData(data?.weeklyData);
      } else {
        const data = (await getMonthlySteps()).data();
        setData(data?.monthlyData);
      }
    } catch (error) {
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    setMonthlyPeriod,
    setWeeklyPeriod,
    period,
    target,
    data,
    isError,
    isLoading,
  };
};

export default useStepChart;
