import { useEffect, useState } from "react";
import { getCatalogue } from "../../services/Activity";
import { BodyPart } from "src/model/Catalogue.model";
import { Link, Outlet, useOutlet } from "react-router-dom";
import Container from "../../components/Container/Container";

const Catalogue = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCatalogue().then((res) => setData(res));
  }, []);

  const outlet = useOutlet();

  return (
    <Container>
      {outlet ? (
        <Outlet />
      ) : (
        <ul>
          {data.map(({ name, id }: BodyPart) => {
            return (
              <li key={id}>
                <Link to={name} style={{ marginLeft: "5px" }}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

export default Catalogue;
