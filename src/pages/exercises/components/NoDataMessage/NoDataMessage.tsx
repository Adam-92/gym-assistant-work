import { BiMessageRoundedError } from "react-icons/bi";
import "./NoDataMessage.css";

const NoDataMessage = ({ text }: { text: string }) => {
  return (
    <article className="container-no-data">
      <div className="message-no-data">
        <BiMessageRoundedError className="icon-no-data" />
        <h1 className="text-no-data">{text}</h1>
        <div className="underline-no-data"></div>
      </div>
    </article>
  );
};

export default NoDataMessage;
