import './WelcomeBoard.css'
import { useEffect, useState } from 'react'
import { getCarouselCharacters } from '../../services/Activity'
import Carousel from '../Carousel/Carousel'

const WelcomeBoard = () => {

    const [characters, setCharacters] = useState([])

    useEffect( () => {
        getCarouselCharacters()
        .then(data => setCharacters(data))
    },[])

        return(
            <article className="position-welcome-board">
                <div className="message-welcome-board">
                    <h1>Welcome, User</h1>
                    <p>Let us know what shape you are interested in.</p>
                    <p>Don't worry at any time, you can change your targets in the settings tab.</p>
                </div>
                <Carousel characters={characters} />
            </article>
        )

}
export default WelcomeBoard