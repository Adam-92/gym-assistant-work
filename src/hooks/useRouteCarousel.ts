import { useState } from "react";

const useRouteCarousel = (selectedBodyPart: string | undefined) => {
  
  const arrayPaths = [
    "chest",
    "biceps",
    "triceps",
    "back",
    "abs",
    "legs",
    "shoulders",
  ];

  const [routeIndex, setRouteIndex] = useState(
    selectedBodyPart ? arrayPaths.indexOf(selectedBodyPart) : 0
  );

  const bodyPart = arrayPaths[routeIndex];

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
    bodyPart,
    goLeftRoute,
    goRightRoute,
  };
};

export default useRouteCarousel;
