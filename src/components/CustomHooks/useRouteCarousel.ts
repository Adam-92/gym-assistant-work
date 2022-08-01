import { useState } from "react";

const useRouteCarousel = () => {
  const [routeIndex, setRouteIndex] = useState(0);

  const arrayPaths: string[] = [
    "chest",
    "biceps",
    "triceps",
    "back",
    "abs",
    "legs",
    "shoulders",
  ];

  const bodyPartName = arrayPaths[routeIndex];

  const goLeftRoute = () => {
    return routeIndex === 0
      ? setRouteIndex(6)
      : setRouteIndex((prev: number) => prev - 1);
  };

  const goRightRoute = () => {
    return routeIndex === 6
      ? setRouteIndex(0)
      : setRouteIndex((prev: number) => prev + 1);
  };

  return {
    bodyPartName,
    goLeftRoute,
    goRightRoute,
  };
};

export default useRouteCarousel;
