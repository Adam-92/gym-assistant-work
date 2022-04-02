import './Carousel.css'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Carousel = () => {
    
    const items  = [
        {
            name: "Heavy",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut.",
        },
        {
            name: "Heavy1",
            description:"dajsldjalksdjksaljkdlakjsdkjalkld",
        },
        {
            name: "Heavy2",
            description:"Ldasdakdp[ak[dka[dk]]]",
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const goLeft = () => {
        
    }
    const checkCurrentIndex = (currentIndex) =>{
    
    }

    return(
        <article className="carousel">
            <section className='content-carousel flex-justify-center'>
                <FontAwesomeIcon icon={faArrowLeft} size='5x' />
                <div className='items-carousel'>
                    <div className='flex-justify-around'>
                        <div className='left-item-carousel bg'>
                            <p>MAREK</p>
                        </div>  
                        <div className={`middle-item-carousel bg `}>
                            <p>ADAM</p>
                        </div>  
                        <div className='right-item-carousel bg'>
                            <p>FILIP</p>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} size='5x' />
            </section>
            <section className='description-carousel'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minima laboriosam distinctio sunt necessitatibus dolore.
                    Lorem ipsum, dol
                </p>
            </section>
        </article>
    )
}
export default Carousel