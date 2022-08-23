import { useGlobalContext } from "../../contexts/GlobalContext";
import StepChart from "../../components/Charts/StepChart/StepChart";
import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import ContainerTiles from "../../components/Tile/ContainerTiles";
import WelcomeModal from "../../components/Modals/WelcomeModal/WelcomeModal";
import NextTraining from "../../components/NextTraining/NextTraining";
import ContainerGuages from "../../components/Guage/ContainerGuages";
import "./Dashboard.css";

const Dashboard = () => {
  const { openModal } = useGlobalContext();

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
      {openModal ? (
        <>
          <article className="new-bg-dashboard"></article>
          <WelcomeModal />
        </>
      ) : null}
    </>
  );
};

export default Dashboard;
