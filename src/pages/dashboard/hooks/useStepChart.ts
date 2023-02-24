import { useState, useCallback, useEffect } from "react";
import { StepsValues } from "src/components/Charts/Charts.model";
import { parseError } from "src/errors/parseError";
import {
  getWeeklySteps,
  getMonthlySteps,
} from "src/firebase/services/dashboardActivity";

const useStepChart = () => {
  const [period, setPeriod] = useState(true);
  const [target, setTarget] = useState(12000);
  const [data, setData] = useState<StepsValues[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const setMonthlyPeriod = useCallback(() => setPeriod(false), []);
  const setWeeklyPeriod = useCallback(() => setPeriod(true), []);

  const fetchData = useCallback(async () => {
    try {
      if (period) {
        const request = await getWeeklySteps();
        const data = request.data();
        setData(data?.weeklyData);
      } else {
        const request = await getMonthlySteps();
        const data = request.data();
        setData(data?.monthlyData);
      }
    } catch (error) {
      setError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    setTarget,
    setMonthlyPeriod,
    setWeeklyPeriod,
    period,
    target,
    data,
    error,
    isLoading,
  };
};

export default useStepChart;
