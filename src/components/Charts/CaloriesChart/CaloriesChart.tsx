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
import useUpdatedCaloriesChartData from "src/hooks/useUpdatedCaloriesChartData";
import { Line } from "react-chartjs-2";
import { options } from "./config/config";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
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
  const { updatedData, isLoading, error, data } =
    useUpdatedCaloriesChartData();

  return (
    <DataStatusHandler data={data} isLoading={isLoading} error={error}>
      {() => <Line options={options} data={updatedData} />}
    </DataStatusHandler>
  );
};

export default CaloriesChart;
