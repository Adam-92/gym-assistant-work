import "./Carousel.css";

const CarouselItem = ({
  name,
  img,
  description,
}: {
  name: string;
  img: string;
  description: string;
}) => {

  return (
    <div>
      <p>{name}</p>
      <div className="img-carousel">
        <img src={img} alt={name} />
      </div>
      <p className="description-carousel">"{description}"</p>
    </div>
  );
};

export default CarouselItem;
