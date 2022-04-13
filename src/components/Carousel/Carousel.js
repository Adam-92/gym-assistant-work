import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { carouselMovement, goLeft, goRight } from "../../utils/Utils";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Carousel = ({ characters }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef([]);

  containerRef.current = [];

  useEffect(() => {
    let containerRunner = containerRef.current[0];
    let containerBuilder = containerRef.current[1];
    let containerAthlete = containerRef.current[2];

    carouselMovement(
      containerRunner, 
      containerBuilder, 
      containerAthlete, 
      containerRef, 
      currentIndex
    )
  }, [currentIndex])

  return (
    <article className="carousel">
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="5x"
        onClick={() => goLeft(setCurrentIndex, currentIndex)}
      />
      {characters.length > 0 ? characters.map((character, index) => {
        const name = character.name;
        const description = character.description;
        const img = character.img;
        return (
          <CarouselItem
            name={name}
            description={description}
            img={img}
            currentIndex={currentIndex}
            containerRef={containerRef}
            key={index}
          />
        )})
      : null}
      <FontAwesomeIcon
        icon={faArrowRight}
        size="5x"
        onClick={() => goRight(setCurrentIndex, currentIndex)}
      />
    </article>
  );
};

export default Carousel;
