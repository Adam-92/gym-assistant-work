import { useEffect, useState } from "react";
import {
  getUserExerciseCards,
  getExercisesForAllUsers,
} from "../../firebase/services/Activity";
import { useParams, useLocation } from "react-router-dom";
import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/components/CarouselRoute/CarouselRoute";
import { NewExercise } from "src/model/model";
import { useSettingsContext } from "src/contexts/settings/hooks/useSettingsContext";
import { assertBodyPartFromParamsIsValid } from "src/components/CarouselRoute/assertBodyPartFromParamsIsValid";
import { availableBodyParts } from "../catalogue-page/availableBodyParts";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<NewExercise[]>([]);
  const { currentUser } = useUserContext();
  const { selectedBodyPart } = useParams();

  const location = useLocation();

  const { showCatalogueExercises } = useSettingsContext();

  const initialBodyPart = selectedBodyPart ?? availableBodyParts[0];
  assertBodyPartFromParamsIsValid(initialBodyPart);

  useEffect(() => {
    if (currentUser) {
      getUserExerciseCards(currentUser.uid).then((res) => {
        setData(
          res.filter(
            (exercise: NewExercise) =>
              exercise.part.toLowerCase() === initialBodyPart
          )
        );
      });
    }
  }, [location.pathname, currentUser, initialBodyPart]);

  useEffect(() => {
    if (currentUser && showCatalogueExercises) {
      getExercisesForAllUsers().then((res) => {
        setData((prev: NewExercise[]) => [
          ...prev,
          ...res.filter(
            (exercise: NewExercise) =>
              exercise.part.toLowerCase() === initialBodyPart
          ),
        ]);
      });
    }
  }, [location.pathname, currentUser, showCatalogueExercises, initialBodyPart]);

  return (
    <div className="container-exercises">
      <div className="content-exercises">
        <CarouselRoute />
        <div className="cards-exercises">
          {data.map((exercise: NewExercise) => (
            <ExerciseCard key={exercise.name} exercise={exercise} />
          ))}
        </div>
        {data.length === 0 && (
          <NoDataMessage text={"No Exercises in the Database"} />
        )}
      </div>
    </div>
  );
};
export default Exercises;
