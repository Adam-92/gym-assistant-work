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
import { options, initialData } from "./config/config";
import { Line } from "react-chartjs-2";
import useLibraryChart from "../../../hooks/useLibraryChart";
import { getCaloriesChartData } from "src/firebase/services/Activity";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart = () => {
  const { updatedData } = useLibraryChart(initialData, getCaloriesChartData);

  return <Line options={options} data={updatedData} />;
};

export default PerformanceChart;
