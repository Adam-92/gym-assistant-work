import { availableBodyParts } from "./availableBodyParts";
import { Link } from "react-router-dom";
import { firstBigLetter } from "src/utils/Utils";
import "./Catalogue.css";

const Catalogue = () => {
  return (
    <article className="catalogue">
      <ul>
        {availableBodyParts.map((name) => {
          return (
            <Link key={name} to={name}>
              <li className="wave-catalogue">
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
