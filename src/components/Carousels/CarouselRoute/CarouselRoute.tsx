import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import { firstBigLetter } from "src/utils/Utils";
import useRouteCarousel from "../../../hooks/useRouteCarousel";
import "./CarouselRoute.css";

const CarouselRoute = () => {
  let { selectedBodyPart } = useParams();

  if (!selectedBodyPart) {
    throw new Error("expected selectedBodyPart");
  }

  const { previousBodyPartUrl, nextBodyPartUrl } =
    useRouteCarousel(selectedBodyPart);

  return (
    <header className="header-carousel-route noSelect">
      <Link to={previousBodyPartUrl}>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="icon-carousel-route"
        />
      </Link>
      <h1>{selectedBodyPart && firstBigLetter(selectedBodyPart)}</h1>
      <Link to={nextBodyPartUrl}>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          className="icon-carousel-route"
        />
      </Link>
    </header>
  );
};

export default CarouselRoute;
