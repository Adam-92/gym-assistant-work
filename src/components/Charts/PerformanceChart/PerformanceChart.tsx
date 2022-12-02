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
import { options } from "./config/config";
import { Line } from "react-chartjs-2";
import { PerformanceProps } from "../../../model/model";
import { updatePerformanceChartData } from "../../../utils/Utils";

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
  const updatedData = updatePerformanceChartData(results);

  return <Line options={options} data={updatedData} />;
};

export default PerformanceChart;
