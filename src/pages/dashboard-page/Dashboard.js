import './dashboard.css'
import Sidebar from '../../components/Sidebars/Sidebar/Sidebar'
import StepChart from '../../components/Charts/StepChart/StepChart'
import CaloriesChart from '../../components/Charts/CaloriesChart/CaloriesChart'
import ContainerTiles from '../../components/tile/ContainerTiles'

const Dashboard = () => {

    /* 
      if the customer has logged in and has visited the dashboard for the
      first time then show WelcomeBoard
    */


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
                    {/* <ProfileSidebar /> */}
                </section>
            </div>
        </main>
    )
}

export default Dashboard