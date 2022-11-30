import { availableBodyParts } from "./availableBodyParts";
import { Link } from "react-router-dom";
import "./Catalogue.css";
import { firstBigLetter } from "src/utils/Utils";

const Catalogue = () => {
  return (
    <article className="catalogue">
      <ul>
        {availableBodyParts.map((name) => {
          return (
            <Link key={name} to={name}>
              <li>
                <img
                  src={`assets/${name}Catalogue.png`}
                  alt="bodyPart"
                  className={`${name === "legs" && "legs-resize"}`}
                />
                <h2>{firstBigLetter(name)}</h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </article>
  );
};

export default Catalogue;
