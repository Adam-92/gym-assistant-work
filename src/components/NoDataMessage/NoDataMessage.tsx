import { BiMessageRoundedError } from "react-icons/bi";
import CarouselRoute from "../Carousels/CarouselRoute/CarouselRoute";
import "./NoDataMessage.css";

const NoDataMessage = ({
  text,
  bodyPart,
  routeIndex,
  setRouteIndex,
}: {
  text: string;
  bodyPart: string | undefined;
  routeIndex: number;
  setRouteIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <article className="container-no-data">
      <CarouselRoute
        bodyPart={bodyPart}
        routeIndex={routeIndex}
        setRouteIndex={setRouteIndex}
      />
      <div className="message-no-data">
        <BiMessageRoundedError className="icon-no-data" />
        <h1 className="text-no-data">{text}</h1>
        <div className="underline-no-data"></div>
      </div>
    </article>
  );
};

export default NoDataMessage;
