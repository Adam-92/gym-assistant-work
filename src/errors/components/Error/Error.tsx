import "./Error.css";
import { ErrorProps } from "./Error.model";

const Error = ({ error }: ErrorProps) => {
  const reload = () => window.location.reload();
  return (
    <div className="error-popover">
      <div className="error-header">Error</div>
      <div className="error-body">{error}</div>
      <div className="error-reload flex-justify-center">
        <button onClick={reload}>Try Again</button>
      </div>
    </div>
  );
};

export default Error;
