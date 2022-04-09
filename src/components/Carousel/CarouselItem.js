import "./Carousel.css"
import { addCharacterClass } from "../../utils/Utils"
const CarouselItem = ({name, img, description, setWelcomeModal}) => {
   
    return(
      <div className={`${ addCharacterClass(name) }`} onClick={ ()=>setWelcomeModal(false) }>
        <p>{name}</p>
        <div className="img-carousel">
          <img src={img} alt={name} />
        </div>
        <p className={`description-carousel ${name === "Bodybuilder" && "show-description-carousel"}`}>
          "{description}"
        </p>
      </div>
    )
}

export default CarouselItem