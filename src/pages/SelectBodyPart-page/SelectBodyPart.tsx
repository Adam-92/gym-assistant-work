import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { getBodyParts } from "../../services/Activity";
import { BodyPart } from "./SelectBodyParts.model";
import { Link, useOutlet } from "react-router-dom";
import ErrorData from "../../components/ErrorData/ErrorData";
import "./SelectBodyPart.css";

const SelectBodyPart = () => {
  const [data, setData] = useState<BodyPart[]>([]);

  useEffect(() => {
    getBodyParts().then((res) => setData(res));
  }, []);

  const outlet = useOutlet();

  return (
    <>
      <Container>
        {!outlet ? (
          <ul>
            {data ? (
              data.map(({ name, id }: BodyPart) => {
                return (
                  <li key={id}>
                    <Link to={name} style={{ marginLeft: "5px" }}>
                      {name}
                    </Link>
                  </li>
                );
              })
            ) : (
              <ErrorData text={"Reload the page or try please later"} />
            )}
          </ul>
        ) : (
          outlet
        )}
      </Container>
    </>
  );
};

export default SelectBodyPart;
