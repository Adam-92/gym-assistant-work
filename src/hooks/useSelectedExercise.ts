import {
  getAllUsersDataSelectedExercise,
  getUserDataSelectedExercise,
} from "src/firebase/services/Activity";
import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { useParams } from "react-router";
import { NewExercise } from "src/model/model";
import { iconsDescription } from "src/pages/selectedExercise-page/iconsDescription";
import { IconsDescription } from "src/pages/selectedExercise-page/SelectedExercise.model";
import { useState, useEffect, useCallback } from "react";
import { parseError } from "src/errors/parseError";

const useSelectedExercise = () => {
  const [data, setData] = useState<NewExercise>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const { currentUser } = useUserContext();
  const { selectedBodyPart, selectedExercise } = useParams();

  const rightDescriptionIcon = iconsDescription.find(
    ({ name }: IconsDescription) => name === selectedBodyPart
  );

  const fetchData = useCallback(async () => {
    try {
      if (currentUser && selectedBodyPart && selectedExercise) {
        const request = await getUserDataSelectedExercise(
          selectedBodyPart,
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
            selectedBodyPart
          );

          const data = request.data();
          const selectedExerciseData = data?.exercises.find(
            (exercise: NewExercise) => exercise.name === selectedExercise
          );
          setData(selectedExerciseData);
        }
      }
    } catch (error) {
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [currentUser, selectedBodyPart, selectedExercise]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    rightDescriptionIcon,
    isLoading,
    isError,
  };
};
export default useSelectedExercise;
