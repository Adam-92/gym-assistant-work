import { useEffect, useState } from "react";
import { getBodyParts } from "../../services/Activity";
import { BodyPart } from "./SelectBodyParts.model";
import { Link, Outlet, useOutlet } from "react-router-dom";
import ViewExercise from "../../components/Modals/ViewExercise/ViewExercise";
import CarouselRoute from "src/components/Carousels/CarouselRoute/CarouselRoute";
import Container from "../../components/Container/Container";
import "./SelectBodyPart.css";

const SelectBodyPart = () => {
  const [data, setData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pickedExercise, setPickedExercise] = useState("");

  useEffect(() => {
    getBodyParts().then((res) => setData(res));
  }, []);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const pickExercise = (exercise: string) => {
    setPickedExercise(exercise);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

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
          <div className="select-body-parts-container">
            <div
              className={`select-body-parts ${isOpenModal && "pointer-none"}`}
            >
              <CarouselRoute />
              <Outlet context={{ pickExercise, openModal, closeModal }} />
            </div>
            {isOpenModal && <ViewExercise name={pickedExercise} />}
          </div>
        )}
      </Container>
    </>
  );
};

export default SelectBodyPart;
