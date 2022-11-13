import { availableBodyParts } from "./availableBodyParts";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <ul>
      {availableBodyParts.map((name: string) => {
        return (
          <li key={name}>
            <Link to={name} style={{ marginLeft: "5px" }}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Catalogue;
