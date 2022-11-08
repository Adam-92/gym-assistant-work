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
import usePerformanceChartData from "../../../hooks/usePerformanceChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//Z tym typem problem tutaj też
const PerformanceChart = ({ results }: any) => {
  const { updatedData } = usePerformanceChartData(initialData, results);

  return <Line options={options} data={updatedData} />;
};

export default PerformanceChart;
