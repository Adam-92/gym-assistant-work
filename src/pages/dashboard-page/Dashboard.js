import "./dashboard.css";
import { useState } from 'react'
import Sidebar from "../../components/Sidebars/Sidebar/Sidebar";
import StepChart from "../../components/Charts/StepChart/StepChart";
import CaloriesChart from "../../components/Charts/CaloriesChart/CaloriesChart";
import ContainerTiles from "../../components/tile/ContainerTiles";
import WelcomeBoard from "../../components/WelcomeBoard/WelcomeBoard";

const Dashboard = () => {

    const [welcomeModal, setWelcomeModal] = useState(true)

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
                        <div className="chart-steps-dashboard">
                            <StepChart />
                        </div>
                        <div className="chart-calories-dashboard">
                            <CaloriesChart />
                        </div>
                    </section>
                    <section className="profile-dashboard"></section>
                </div>
            </article>
            {welcomeModal ?
                <>
                    <article className="new-bg-dashboard"></article>
                    <WelcomeBoard setWelcomeModal={setWelcomeModal} />
                </>
                : null}
        </main>
    );
};

export default Dashboard;
