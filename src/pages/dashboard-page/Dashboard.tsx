import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import StepChart from "../../components/Charts/StepChart/StepChart";
import ContainerGuages from "../../components/Guage/ContainerGuages";
import NextTraining from "../../components/NextTraining/NextTraining";
import ContainerTiles from "../../components/Tile/ContainerTiles";
import { NextTrainingProvider } from "src/contexts/nextTraining/provider/NextTrainingProvider";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <article className="grid-dashboard">
      <header className="header-dashboard">
        <ContainerGuages />
        <ContainerTiles />
      </header>
      <div className="chart-steps-dashboard">
        <StepChart />
      </div>
      <div className="chart-calories-dashboard">
        <CaloriesChart />
      </div>
      <div className="next-training-dashboard">
        <NextTrainingProvider>
          <NextTraining />
        </NextTrainingProvider>
      </div>
      <section className="todo-dashboard"></section>
    </article>
  );
};

export default Dashboard;
