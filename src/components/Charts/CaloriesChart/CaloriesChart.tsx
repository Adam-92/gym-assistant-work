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
import { Line } from "react-chartjs-2";
import { options } from "./config/config";
import useCaloriesChartData from "../../../hooks/useCaloriesChartData";
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
  const { updatedData, data, isLoading, isError } = useCaloriesChartData();
  return (
    <DataStatusHandler data={data} isLoading={isLoading} isError={isError}>
      {() => <Line options={options} data={updatedData} />}
    </DataStatusHandler>
  );
};

export default CaloriesChart;
