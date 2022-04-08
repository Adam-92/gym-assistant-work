import "./Carousel.css"
import { useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { positionCharacters, goLeft, goRight } from "../../utils/Utils"
import CarouselItem from "./CarouselItem"

const Carousel = ({characters}) => {
  const charactersContainer= useRef(null) 
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (characters.length > 0) {
      const all = charactersContainer.current.children
      const runner = all[0]
      const builder = all[1]
      const athlete = all[2]
      positionCharacters(runner, builder, athlete, currentIndex)
    }
  }, [currentIndex])
 
  return (
    <article className="carousel">
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        size="5x" 
        onClick={()=>goLeft(setCurrentIndex, currentIndex)} 
      />
      <div className="items-carousel">
        {characters.length > 0 ? (
          <div className="flex-justify-around" ref={charactersContainer}>
            {characters.map( (character,index) => {
              const name  = character.name
              const description = character.description
              const img = character.img
              return (
                <CarouselItem 
                  name={name} 
                  description={description} 
                  img={img} 
                  key={index}
                />
              )
            })}
          </div>
        ) : null}
      </div>
      <FontAwesomeIcon 
        icon={faArrowRight} 
        size="5x" 
        onClick={()=>goRight(setCurrentIndex, currentIndex)} 
      />
    </article>
  );
};

export default Carousel;
