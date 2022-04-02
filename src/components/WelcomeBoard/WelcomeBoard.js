import './WelcomeBoard.css'
import Carousel from '../Carousel/Carousel'
import WelcomeForm from '../Forms/WelcomeForm/WelcomeForm'

const WelcomeBoard = () => {
    
    return(
        <article className="position-welcome-board">
            <div className="content-welcome-board">
                <h1>Welcome, User</h1>
                <div className="carousel-welcome-board">
                    <Carousel />
                </div>
                <WelcomeForm/>
            </div>
        </article>
    )
}
export default WelcomeBoard