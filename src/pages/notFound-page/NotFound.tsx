import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./NotFound.css";

const Notfound = () => {
  return (
    <article className="container-not-found wrap">
      <FontAwesomeIcon icon={faTriangleExclamation} size="5x" className="p-r m-y" />
      <h1>PAGE HAS NOT BEEN FOUNDED</h1>
    </article>
  );
};

export default Notfound;
