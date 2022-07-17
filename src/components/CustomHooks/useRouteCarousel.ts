import { useState } from "react";

const useRouteCarousel = () => {
  const [routeIndex, setRouteIndex] = useState(0);
  
  const goLeftRoute = (
    index: number,
    setRoute: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return index === 0 ? setRoute(6) : setRoute((prev: number) => prev - 1);
  };

  const goRightRoute = (
    index: number,
    setRoute: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return index === 6 ? setRoute(0) : setRoute((prev: number) => prev + 1);
  };

  return {
    routeIndex,
    setRouteIndex,
    goLeftRoute,
    goRightRoute,
  };
};

export default useRouteCarousel;
