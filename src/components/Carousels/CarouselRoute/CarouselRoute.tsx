import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { nameOfPart } from "../../../utils/Utils";
import { useRef, useEffect } from "react";
import { CarouselRouteInterface } from "src/model/Model";
import "./CarouselRoute.css";

const CarouselRoute = ({
  routeIndex,
  goLeftRoute,
  goRightRoute,
  setRouteIndex,
}: CarouselRouteInterface) => {
  const navigate = useNavigate();
  const urlPath = useLocation().pathname;

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
          goLeftRoute(routeIndex, setRouteIndex);
        }}
      />
      <h1>{nameOfPart(urlPath)}</h1>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="icon-carousel-route"
        onClick={() => {
          goRightRoute(routeIndex, setRouteIndex);
        }}
      />
    </header>
  );
};

export default CarouselRoute;
