import { BiMessageRoundedError } from "react-icons/bi";
import "./ErrorData.css"
const ErrorData = ({ text }: { text: string }) => {
  return (
    <article className="container-no-data">
      <BiMessageRoundedError className="icon-no-data" />
      <h1 className="text-no-data">{text}</h1>
      <div className="underline-no-data"></div>
    </article>
  );
};

export default ErrorData;
