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

  const arrayPaths: string[] = [
    "chest",
    "biceps",
    "triceps",
    "back",
    "abs",
    "legs",
  ];
  return (
    <header className="header-carousel-route noSelect">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="icon-carousel-route"
        onClick={() => {
          console.log(arrayPaths[routeIndex]);
          goLeftRoute(routeIndex, setRouteIndex);
          navigate(`../${arrayPaths[routeIndex]}`);
        }}
      />
      <h1>{capitalizeFirst(bodyPart)}</h1>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="icon-carousel-route"
        onClick={() => {
          goRightRoute(routeIndex, setRouteIndex);
          navigate(`../${arrayPaths[routeIndex]}`);
        }}
      />
    </header>
  );
};

export default CarouselRoute;
