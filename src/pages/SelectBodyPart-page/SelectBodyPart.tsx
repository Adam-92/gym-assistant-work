import { useEffect, useState } from "react";
import { getBodyParts } from "../../services/Activity";
import { BodyPart } from "./SelectBodyParts.model";
import { Link, useOutlet } from "react-router-dom";
import CarouselRoute from "src/components/Carousels/CarouselRoute/CarouselRoute";
import Container from "../../components/Container/Container";
import "./SelectBodyPart.css";

const SelectBodyPart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBodyParts().then((res) => setData(res));
  }, []);

  const outlet = useOutlet();

  return (
    <>
      <Container>
        {!outlet ? (
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
        ) : (
          <div className="select-body-parts">
            <CarouselRoute/>
              {outlet}
          </div>
        )}
      </Container>
    </>
  );
};

export default SelectBodyPart;
