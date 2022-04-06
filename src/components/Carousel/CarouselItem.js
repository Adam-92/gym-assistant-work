import "./Carousel.css"
import { addCharacterClass } from "../../utils/Utils"
const CarouselItem = ({name, img, description}) => {
   
    return(
      <div className={`${ addCharacterClass(name) }`} onClick={()=>console.log('MyPICK')}>
        <p>{name}</p>
        <div className="img-carousel"><img src={img} /></div>
        <p className="description-carousel">
          "{description}"
        </p>
      </div>
    )
}

export default CarouselItem