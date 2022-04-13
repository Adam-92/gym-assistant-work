import "./dashboard.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Sidebar from "../../components/Sidebars/Sidebar/Sidebar";
import StepChart from "../../components/Charts/StepChart/StepChart";
import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import ContainerTiles from "../../components/tile/ContainerTiles";
import WelcomeModal from "../../components/Modals/WelcomeModal/WelcomeModal";

const Dashboard = () => {

    const { openModal } = useGlobalContext()

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
                        <div className="charts-dashboard">
                            <div className="chart-steps-dashboard">
                                <StepChart />
                            </div>
                            <div className="chart-calories-dashboard">
                                <CaloriesChart />
                            </div>
                            <div className="chart-results-dashboard">
                              
                            </div>
                        </div>
                    </section>
                    <section className="profile-dashboard"></section>
                </div>
            </article>
            {openModal ?
                <>  
                    <article className="new-bg-dashboard"></article>
                    <WelcomeModal />
                </>
                : null}
        </main>
    );
};

export default Dashboard;
