import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { firstBigLetter } from "src/utils/Utils";
import useRouteCarousel from "../../CustomHooks/useRouteCarousel";
import "./CarouselRoute.css";

const CarouselRoute = () => {
  const navigate = useNavigate();
  const firstRender = useRef(true);
  const { bodyPartName, goLeftRoute, goRightRoute } = useRouteCarousel();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    navigate(`../${bodyPartName}`);
  }, [bodyPartName, navigate]);

  return (
    <header className="header-carousel-route noSelect">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="icon-carousel-route"
        onClick={goLeftRoute}
      />
      <h1>{firstBigLetter(bodyPartName)}</h1>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="icon-carousel-route"
        onClick={goRightRoute}
      />
    </header>
  );
};

export default CarouselRoute;
