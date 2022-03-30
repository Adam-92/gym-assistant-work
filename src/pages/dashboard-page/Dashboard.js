import './Dashboard.css'
import Sidebar from '../../components/Sidebars/Sidebar'
import StepChart from '../../components/Charts/StepChart/StepChart'
import CaloriesChart from '../../components/Charts/CaloriesChart/CaloriesChart'
import ContainerTiles from '../../components/Tile/ContainerTiles'
import ProfileSidebar from '../../components/Sidebars/ProfileSidebar'
const Dashboard = () => {

    return(
        <main className="center-container-dashboard">
            <div className="container-dashboard">
                <section className='sidebar-dashboard'>
                    <Sidebar />
                </section>
                <section className='content-dashboard'>
                    <header className='header-dashboard'>
                        <ContainerTiles />
                    </header>
                    <div className='chart-steps-dashboard'>
                        <StepChart/>
                    </div>
                    <div className='chart-calories-dashboard'>
                        <CaloriesChart />
                    </div>
                </section>
                <section className='profile-dashboard'>
                    <ProfileSidebar />
                </section>
            </div>
        </main>
    )
}

export default Dashboard