import { useEffect, useState } from "react";
import { updateChartData } from "src/utils/Utils";
/* Do skończenia jeszcze ... */
const useLibraryChart = (initialData: any, request: any) => {
  const [data, setData] = useState({
    0: [2000, 2000, 2000, 2000, 2000, 2000, 2000],
    1: [1500, 3200, 2000, 1200, 3500, 800, 2900],
  });

  useEffect(() => {
    request().then((data: any) => setData(data));
  }, [request]);

  const updatedData = updateChartData(data, initialData);

  return { updatedData };
};

export default useLibraryChart;
