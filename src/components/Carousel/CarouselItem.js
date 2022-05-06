import "./Carousel.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { addToRefContainer, containerClass } from "../../utils/Utils";

const CarouselItem = ({ name, img, description, containerRef }) => {
  const { setOpenModal, setChoosenFigure } = useGlobalContext();
  const container = containerClass(name);

  return (
    <div
      ref={(el) => addToRefContainer(el, containerRef)}
      className={`${container}`}
      onClick={() => {
        setOpenModal(false);
        setChoosenFigure(name);
      }}
    >
      <p>{name}</p>
      <div className="img-carousel">
        <img src={img} alt={name} />
      </div>
      <p className="description-carousel">"{description}"</p>
    </div>
  );
};

export default CarouselItem;
