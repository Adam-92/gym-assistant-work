import { availableBodyParts } from "./availableBodyParts";
import { Link, Outlet, useOutlet } from "react-router-dom";

const Catalogue = () => {
  const outlet = useOutlet();

  return (
    <>
      {outlet ? (
        <Outlet />
      ) : (
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
      )}
    </>
  );
};

export default Catalogue;
