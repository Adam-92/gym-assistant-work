import { useEffect, useState } from "react";
import { getCatalogue } from "../../services/Activity";
import { Link, Outlet, useOutlet } from "react-router-dom";
import { BodyPartsSelection } from "src/model/Catalogue.mode";

const Catalogue = () => {
  const [data, setData] = useState<BodyPartsSelection[] | undefined>([]);

  useEffect(() => {
    getCatalogue().then((data) => setData(data?.bodyPartsSelection));
  }, []);

  const outlet = useOutlet();

  return (
    <>
      {outlet ? (
        <Outlet />
      ) : (
        <ul>
          {data &&
            data.map(({ id, name }: BodyPartsSelection) => {
              return (
                <li key={name + id}>
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
