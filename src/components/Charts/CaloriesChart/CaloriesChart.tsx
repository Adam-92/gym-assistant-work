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
import { options, initialData } from "./config/config";
import { getCaloriesChartData } from "src/firebase/services/Activity";
import useRequestDataChart from "../../../hooks/useRequestDataChart";

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
  const { updatedData } = useRequestDataChart(
    initialData,
    getCaloriesChartData
  );

  return <Line options={options} data={updatedData} />;
};
export default CaloriesChart;
