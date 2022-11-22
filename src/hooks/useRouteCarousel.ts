import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { useLocation } from "react-router";

const useRouteCarousel = (selectedBodyPart: string) => {
  const { pathname } = useLocation();

  const currentRouteIndex = availableBodyParts.indexOf(selectedBodyPart);

  const previousBodyPartIndex =
    currentRouteIndex === 0 ? 6 : currentRouteIndex - 1;

  const nextBodyPartIndex = currentRouteIndex === 6 ? 0 : currentRouteIndex + 1;

  const previousBodyPart = availableBodyParts[previousBodyPartIndex];
  const nextBodyPart = availableBodyParts[nextBodyPartIndex];

  const previousBodyPartUrl = pathname.replace(
    selectedBodyPart,
    previousBodyPart
  );
  const nextBodyPartUrl = pathname.replace(selectedBodyPart, nextBodyPart);

  return {
    previousBodyPartUrl,
    nextBodyPartUrl,
  };
};

export default useRouteCarousel;
