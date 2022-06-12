import { BiMessageRoundedError } from "react-icons/bi";
import "./ErrorData.css";
const ErrorData = () => {
  return (
    <article className="container-error-data">
      <BiMessageRoundedError className="icon-error-data" />
      <h1 className="text-error-data">We couldn't get the data</h1>
      <h1 className="text-error-data">Please refresh the page or try later.</h1>
      <div className="underline-error-data"></div>
    </article>
  );
};

export default ErrorData;
