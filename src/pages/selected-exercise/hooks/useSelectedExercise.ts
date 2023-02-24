import {
  getAllUsersDataSelectedExercise,
  getUserDataSelectedExercise,
} from "src/firebase/services/catalogueActivity";
import { useParams } from "react-router";
import { NewExercise } from "src/model/model";
import { iconsDescription } from "src/pages/selected-exercise/iconsDescription";
import { IconsDescription } from "src/pages/selected-exercise/SelectedExercisePage.model";
import { useState, useEffect, useCallback } from "react";
import { parseError } from "src/errors/parseError";
import { assertBodyPartFromParamsIsValid } from "src/pages/exercises/components/CarouselRoute/assertBodyPartFromParamsIsValid";
import { availableBodyParts } from "src/pages/catalogue/availableBodyParts";
import { useUser } from "src/contexts/user/hooks/useUser";

const useSelectedExercise = () => {
  const [data, setData] = useState<NewExercise>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { currentUser } = useUser();
  const { selectedBodyPart, selectedExercise } = useParams();

  const initialBodyPart = selectedBodyPart ?? availableBodyParts[0];

  assertBodyPartFromParamsIsValid(initialBodyPart);

  const rightDescriptionIcon = iconsDescription.find(
    ({ name }: IconsDescription) => name === initialBodyPart
  );

  const fetchData = useCallback(async () => {
    try {
      if (initialBodyPart && selectedExercise) {
        const request = await getUserDataSelectedExercise(
          initialBodyPart,
          currentUser.uid
        );

        const data = request.data();
        const selectedExerciseData = data?.exercises.find(
          (exercise: NewExercise) => exercise.name === selectedExercise
        );

        if (selectedExerciseData) {
          setData(selectedExerciseData);
        } else {
          const request = await getAllUsersDataSelectedExercise(
            initialBodyPart
          );

          const data = request.data();
          const selectedExerciseData = data?.exercises.find(
            (exercise: NewExercise) => exercise.name === selectedExercise
          );
          setData(selectedExerciseData);
        }
      }
    } catch (error) {
      setError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [currentUser.uid, selectedExercise, initialBodyPart]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    rightDescriptionIcon,
    isLoading,
    error,
  };
};
export default useSelectedExercise;
