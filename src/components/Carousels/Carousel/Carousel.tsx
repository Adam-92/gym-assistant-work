import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CarouselItem from "./CarouselItem";
import { CharactersCarousel } from "../Carousels.model";
import "./Carousel.css";

/* 
  Z tym daj spokój, będę jeszcze myślał, czy faktycznie będe z tego korzystał. 
  Póki co nie ma co sprawdzać
*/
const Carousel = ({ characters }:{characters: CharactersCarousel[]}) => {

  return (
    <article className="carousel">
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="5x"
        onClick={() =>{}}
      />
      {(characters && characters.length > 0)
        ? characters.map((character: CharactersCarousel, index: number) => {
            const name = character.name;
            const description = character.description;
            const img = character.img;
            return (
              <CarouselItem
                name={name}
                description={description}
                img={img}
                key={index}
              />
            );
          })
        : <></>}
      <FontAwesomeIcon
        icon={faArrowRight}
        size="5x"
        onClick={() => {}}
      />
    </article>
  );
};

export default Carousel;
