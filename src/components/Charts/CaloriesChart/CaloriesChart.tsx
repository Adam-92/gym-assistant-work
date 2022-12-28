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
import Transition from "../../Transition/Transition";
import "./CaloriesChart.css";

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
  const { updatedData, isLoading, error, data } = useUpdatedCaloriesChartData();

  return (
    <DataStatusHandler data={data} isLoading={isLoading} error={error}>
      {() => (
        <Transition style={{ height: "100%" }}>
          <div className="container-calories-chart">
            <header className="header-calories-chart">
              <h2>Calorific balance: </h2>
            </header>
            <div className="content-calories-chart">
              <Line options={options} data={updatedData} />
            </div>
          </div>
        </Transition>
      )}
    </DataStatusHandler>
  );
};

export default CaloriesChart;
