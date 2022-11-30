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
    (newSelectedExercise: SelectedExercise) =>
      setSelectedExercise(newSelectedExercise),
    []
  );

  const lastTraining = useMemo(() => {
    if (!data || !selectedExercise) return undefined;

    const bodyPart: BodyPart | undefined = data.find(
      ({ bodyPart }) => bodyPart === selectedExercise.bodyPart
    );

    const exercise = bodyPart?.exercises.find(
      (exercise: ExerciseInformation) =>
        exercise.name === selectedExercise?.name
    );
    return exercise?.lastTraining;
  }, [data, selectedExercise]);

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
