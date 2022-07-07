import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  goRightRoute,
  goLeftRoute,
  capitalizeFirst,
} from "../../../utils/Utils";
import "./CarouselRoute.css";
import { useRef, useEffect, useState } from "react";

const CarouselRoute = ({
  bodyPart,
  routeIndex,
  setRouteIndex,
}: {
  bodyPart: string | undefined;
  routeIndex: number;
  setRouteIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const navigate = useNavigate();
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
    navigate(`../${arrayPaths[routeIndex]}`);
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
      <h1>{capitalizeFirst(bodyPart)}</h1>
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
