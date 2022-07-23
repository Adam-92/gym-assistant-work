import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { nameOfPart } from "../../../utils/Utils";
import { useRef, useEffect } from "react";
import useRouteCarousel from "../../CustomHooks/useRouteCarousel";
import "./CarouselRoute.css";

const CarouselRoute = () => {
  const navigate = useNavigate();
  const urlPath = useLocation().pathname;
  console.log("🚀 ~ urlPath ", urlPath )

  const { routeIndex, goLeftRoute, goRightRoute } = useRouteCarousel();

  const firstRender = useRef(true);
  const arrayPaths: string[] = [
    "chest",
    "biceps",
    "triceps",
    "back",
    "abs",
    "legs",
    "shoulders",
  ];

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    navigate(`./${arrayPaths[routeIndex]}`);
  }, [routeIndex]);

  return (
    <header className="header-carousel-route noSelect">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="icon-carousel-route"
        onClick={() => {
          goLeftRoute(routeIndex);
        }}
      />
      <h1>{nameOfPart(urlPath)}</h1>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="icon-carousel-route"
        onClick={() => {
          goRightRoute(routeIndex);
        }}
      />
    </header>
  );
};

export default CarouselRoute;
