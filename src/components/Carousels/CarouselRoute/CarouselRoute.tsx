import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { firstBigLetter } from "src/utils/Utils";
import useRouteCarousel from "../../../hooks/useRouteCarousel";
import "./CarouselRoute.css";

const CarouselRoute = () => {
  const navigate = useNavigate();
  let { selectedBodyPart } = useParams();

  const { bodyPart, goLeftRoute, goRightRoute } =
    useRouteCarousel(selectedBodyPart);

  useEffect(() => {
    navigate(`../${bodyPart}`);
  }, [bodyPart, navigate]);

  return (
    <header className="header-carousel-route noSelect">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="icon-carousel-route"
        onClick={goLeftRoute}
      />
      <h1>{firstBigLetter(bodyPart)}</h1>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="icon-carousel-route"
        onClick={goRightRoute}
      />
    </header>
  );
};

export default CarouselRoute;
