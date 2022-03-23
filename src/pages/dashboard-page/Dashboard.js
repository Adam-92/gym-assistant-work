import './dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Time from '../../components/time/Time'
import StepChart from '../../components/charts/step-chart/StepChart'
import CaloriesChart from '../../components/charts/calories-chart/CaloriesChart'
import Tile from '../../components/tile/Tile'
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