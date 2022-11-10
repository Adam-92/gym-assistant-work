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
import { PerformanceProps } from "../../../model/model";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart = ({ results }: PerformanceProps) => {
  const { updatedData } = usePerformanceChartData(initialData, results);

  return <Line options={options} data={updatedData} />;
};

export default PerformanceChart;
