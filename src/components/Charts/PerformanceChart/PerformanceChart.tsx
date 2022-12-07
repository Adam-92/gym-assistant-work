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
import useUpdatedPerformanceChart from "src/hooks/useUpdatedPerformanceChart";

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
  const { updatedData } = useUpdatedPerformanceChart(results);

  return <Line options={options} data={updatedData} />;
};

export default PerformanceChart;
