import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getCaloriesChartData } from "src/firebase/services/Activity";
import { updateCaloriesChartData } from "src/utils/Utils";
import { Line } from "react-chartjs-2";
import { options } from "./config/config";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import useFetchData from "src/hooks/useFetchData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CaloriesChart = () => {
  const { data, isLoading, isError } = useFetchData(getCaloriesChartData);

  const updatedData = updateCaloriesChartData(data);

  return (
    <DataStatusHandler data={data} isLoading={isLoading} isError={isError}>
      {() => <Line options={options} data={updatedData} />}
    </DataStatusHandler>
  );
};

export default CaloriesChart;
