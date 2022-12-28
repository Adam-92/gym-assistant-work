import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import { firstBigLetter } from "src/utils/Utils";
import useRouteCarousel from "../../hooks/useRouteCarousel";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { assertBodyPartFromParamsIsValid } from "./assertBodyPartFromParamsIsValid";
import "./CarouselRoute.css";

const CarouselRoute = () => {
  let { selectedBodyPart } = useParams();

  if (!selectedBodyPart) {
    throw new Error("expected selectedBodyPart");
  }

  const initialBodyPart = selectedBodyPart ?? availableBodyParts[0];

  assertBodyPartFromParamsIsValid(initialBodyPart);

  const { previousBodyPartUrl, nextBodyPartUrl } =
    useRouteCarousel(initialBodyPart);

  return (
    <header className="header-carousel-route noSelect">
      <Link to={previousBodyPartUrl}>
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="icon-carousel-route"
          rotate={270}
        />
      </Link>
      <h5>{selectedBodyPart && firstBigLetter(initialBodyPart)}</h5>
      <Link to={nextBodyPartUrl}>
        <FontAwesomeIcon
          icon={faCaretRight}
          className="icon-carousel-route"
        />
      </Link>
    </header>
  );
};

export default CarouselRoute;
