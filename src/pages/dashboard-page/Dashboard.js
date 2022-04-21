import { useGlobalContext } from "../../contexts/GlobalContext";
import Sidebar from "../../components/Sidebars/Sidebar/Sidebar";
import StepChart from "../../components/Charts/StepChart/StepChart";
import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import ContainerTiles from "../../components/tile/ContainerTiles";
import WelcomeModal from "../../components/Modals/WelcomeModal/WelcomeModal";
import NextTraining from "../../components/NextTraining/NextTraining";
import "./dashboard.css";

const Dashboard = () => {
  const { openModal } = useGlobalContext();

  return (
    <main className="dashboard">
      <article className="center-container-dashboard">
        <div className="container-dashboard">
          <section className="sidebar-dashboard">
            <Sidebar />
          </section>
          <section className="content-dashboard">
            <header className="header-dashboard">
              <ContainerTiles />
            </header>
            <div className="statistics-dashboard">
              <div className="charts-container-dashboard">
                <div className="chart-steps-dashboard">
                  <StepChart />
                </div>
                <div className="chart-calories-dashboard">
                 { <CaloriesChart />}
                </div>
              </div>
              <div className="next-training-dashboard">
                <NextTraining />
              </div>
            </div>
          </section>
          <section className="profile-dashboard"></section>
        </div>
      </article>
      {openModal ? (
        <>
          <article className="new-bg-dashboard"></article>
          <WelcomeModal />
        </>
        ) 
      : null}
    </main>
  );
};

export default Dashboard;
