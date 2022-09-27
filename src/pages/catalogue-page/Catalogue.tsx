import { bodyPartsSelectionCatalogue } from "./bodyPartsSelectionCatalogue";
import { Link, Outlet, useOutlet } from "react-router-dom";
import { BodyPartsSelection } from "src/model/Catalogue.mode";

const Catalogue = () => {
  const outlet = useOutlet();
  
  return (
    <>
      {outlet ? (
        <Outlet />
      ) : (
        <ul>
          {bodyPartsSelectionCatalogue.map(
            ({ id, name }: BodyPartsSelection) => {
              return (
                <li key={name + id}>
                  <Link to={name} style={{ marginLeft: "5px" }}>
                    {name}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default Catalogue;
