import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import StepChart from "../../components/Charts/StepChart/StepChart";
import ContainerGuages from "./components/Guage/ContainerGuages";
import NextTraining from "./components/NextTraining/NextTraining";
import ContainerTiles from "./components/Tile/ContainerTiles";
import { NextTrainingProvider } from "src/contexts/nextTraining/provider/NextTrainingProvider";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <article className="grid-dashboard">
      <header className="header-dashboard shadow-inset">
        <ContainerGuages />
        <ContainerTiles />
      </header>
      <div className="chart-steps-dashboard shadow-inset">
        <StepChart />
      </div>
      <div className="chart-calories-dashboard shadow-inset">
        <CaloriesChart />
      </div>
      <div className="next-training-dashboard shadow-inset">
        <NextTrainingProvider>
          <NextTraining />
        </NextTrainingProvider>
      </div>
      <section className="todo-dashboard shadow-inset"></section>
    </article>
  );
};

export default DashboardPage;
