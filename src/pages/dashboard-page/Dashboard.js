import './Dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import StepChart from '../../components/Charts/StepChart/StepChart'
import CaloriesChart from '../../components/Charts/CaloriesChart/CaloriesChart'
import Tile from '../../components/Tile/Tile'
const Dashboard = () => {

    return(
        <main className="center-container-dashboard">
            <div className="container-dashboard">
                <section className='sidebar-dashboard'>
                    <Sidebar />
                </section>
                <section className='content-dashboard'>
                    <header className='header-dashboard'>
                        <h1>Dashboard</h1>
                         <div className='tile-dashboard'>
                            <Tile />
                         </div>
                    </header>
                    <div className='chart-steps-dashboard'>
                        <StepChart/>
                    </div>
                    <div className='chart-calories-dashboard'>
                        <CaloriesChart />
                    </div>
                </section>
                <section className='profile-dashboard'>

                </section>
            </div>
        </main>
    )
}

export default Dashboard