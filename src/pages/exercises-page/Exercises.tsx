import { useEffect, useState } from "react";
import { getExerciseCards } from "../../services/Activity";
import { ExerciseCardInterface } from "src/model/ExerciseCards.model";
import { useParams, useLocation } from "react-router-dom";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import ViewExercise from "../../components/Modals/ViewExercise/ViewExercise";
import CarouselRoute from "src/components/Carousels/CarouselRoute/CarouselRoute";
import { useGlobalContext } from "src/contexts/GlobalContext";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<[] | null>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pickedExercise, setPickedExercise] = useState("");

  //Nie wiem dlaczego nie widzi typu currentUser ... ?
  const { currentUser } = useGlobalContext();
  let { selectedBodyPart } = useParams();
  const location = useLocation();

  useEffect(() => {
    getExerciseCards(currentUser.uid);
  }, [location.pathname, selectedBodyPart]);

  const pickExercise = (exercise: string) => {
    setPickedExercise(exercise);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="container-exercises">
        <div className={`content-exercises ${isOpenModal && "pointer-none"}`}>
          <CarouselRoute />
          {data ? (
            <div className="cards-exercises">
              <ExerciseCard
                exercises={data}
                pickExercise={pickExercise}
                closeModal={closeModal}
              />
            </div>
          ) : (
            <NoDataMessage text={"No Exercises in the Database"} />
          )}
        </div>
        {isOpenModal && <ViewExercise name={pickedExercise} />}
      </div>
    </>
  );
};
export default Exercises;
