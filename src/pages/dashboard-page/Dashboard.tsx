import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import StepChart from "../../components/Charts/StepChart/StepChart";
import ContainerGuages from "../../components/Guage/ContainerGuages";
import NextTraining from "../../components/NextTraining/NextTraining";
import ContainerTiles from "../../components/Tile/ContainerTiles";
import "./Dashboard.css";

const Dashboard = () => {

  return (
    <>
      <header className="header-dashboard">
        <ContainerGuages />
        <ContainerTiles />
      </header>
      <section className="statistics-dashboard">
        <div className="charts-container-dashboard">
          <div className="chart-steps-dashboard">
            <StepChart />
          </div>
          <div className="chart-calories-dashboard">
            <CaloriesChart />
          </div>
        </div>
        <div className="next-training-dashboard">
          <NextTraining />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
