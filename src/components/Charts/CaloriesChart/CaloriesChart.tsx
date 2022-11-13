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
import { options} from "./config/config";
import useCaloriesChartData from "../../../hooks/useCaloriesChartData";

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
  const { updatedData } = useCaloriesChartData();

  return <Line options={options} data={updatedData} />;
};
export default CaloriesChart;
