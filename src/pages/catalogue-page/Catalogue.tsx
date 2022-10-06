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
          {availableBodyParts.map((name: string, index: number) => {
            return (
              <li key={name + index}>
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
