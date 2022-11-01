import { useState, useCallback } from "react";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";

const useRouteCarousel = (selectedBodyPart: string | undefined) => {
  const [routeIndex, setRouteIndex] = useState(
    selectedBodyPart ? availableBodyParts.indexOf(selectedBodyPart) : 0
  );

  const bodyPart = availableBodyParts[routeIndex];

  const goLeftRoute = useCallback(() => {
    setRouteIndex((prev: number) => {
      return prev === 0 ? 6 : prev - 1;
    });
  }, []);

  const goRightRoute = useCallback(() => {
    setRouteIndex((prev: number) => {
      return prev === 6 ? 0 : prev + 1;
    });
  }, []);

  return {
    bodyPart,
    goLeftRoute,
    goRightRoute,
  };
};

export default useRouteCarousel;
