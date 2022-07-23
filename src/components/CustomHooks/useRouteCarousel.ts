import { useState } from "react";

const useRouteCarousel = () => {
  const [routeIndex, setRouteIndex] = useState(0);

  const goLeftRoute = (index: number) => {
    return index === 0
      ? setRouteIndex(6)
      : setRouteIndex((prev: number) => prev - 1);
  };

  const goRightRoute = (index: number) => {
    return index === 6
      ? setRouteIndex(0)
      : setRouteIndex((prev: number) => prev + 1);
  };

  return {
    routeIndex,
    goLeftRoute,
    goRightRoute,
  };
};

export default useRouteCarousel;
