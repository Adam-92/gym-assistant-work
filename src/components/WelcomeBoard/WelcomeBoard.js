import './WelcomeBoard.css'
import Carousel from '../Carousel/Carousel'
import athlete from '../../img/crossfit.png'
import bodybuilder from '../../img/heavy.png'
import runner from '../../img/runner.png'

const WelcomeBoard = () => {

    const characters = [
        {
            name: "Runner",
            description:"Speed and Time that is what I like",
            img: runner
        },
        {
            name: "Bodybuilder",
            description:"Never too little muscle",
            img: bodybuilder
        },
        {
            name: "Athlete",
            description:"Cought and Cry, but never die",
            img: athlete
        }
    ]
    return(
        <article className="position-welcome-board">
            <div className="message-welcome-board">
                <h1>Welcome, User</h1>
                <p>Let us know what shape you are interested in.</p>
                <p>Dont worry in any time, you can change your targets in the settings tab. </p>
            </div>
            <Carousel characters={characters}/>
        </article>
    )
}
export default WelcomeBoard