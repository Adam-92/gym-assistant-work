import { useCallback, useMemo, useState } from "react";
import { NextTrainingContext } from "../context/NextTrainingContext";
import {
  NextTrainingProviderProps,
  SelectedExercise,
} from "./NextTrainingProvider.model";
import { getNextTraining } from "src/firebase/services/Activity";
import useFetchData from "src/hooks/useFetchData";
import {
  BodyPart,
  ExerciseInformation,
} from "src/components/NextTraining/NextTraining.model";
import { NextTrainingContextValue } from "../context/NextTrainingContext.model";

export const NextTrainingProvider = ({
  children,
}: NextTrainingProviderProps) => {
  const { isLoading, isError, data } = useFetchData(getNextTraining);
  const [selectedExercise, setSelectedExercise] = useState<SelectedExercise>();

  const selectExercise = useCallback(
    (selectedExercise: SelectedExercise) =>
      setSelectedExercise(selectedExercise),
    []
  );

  const getRightBodyPart = useCallback((): BodyPart | undefined => {
    return data?.find(
      (bodyPart: BodyPart) => bodyPart.part === selectedExercise?.bodyPart
    );
  }, [data, selectedExercise]);

  const getRightExercise = useCallback(() => {
    const bodyPart = getRightBodyPart();
    const exercise = bodyPart?.exercises.find(
      (exercise: ExerciseInformation) =>
        exercise.name === selectedExercise?.name
    );
    return exercise;
  }, [getRightBodyPart, selectedExercise]);

  const lastTraining = getRightExercise()?.lastTraining;

  const value: NextTrainingContextValue = useMemo(
    () => ({
      isLoading,
      isError,
      data,
      selectedExercise,
      selectExercise,
      lastTraining,
    }),
    [data, isLoading, isError, lastTraining, selectExercise, selectedExercise]
  );

  return (
    <NextTrainingContext.Provider value={value}>
      {children}
    </NextTrainingContext.Provider>
  );
};
