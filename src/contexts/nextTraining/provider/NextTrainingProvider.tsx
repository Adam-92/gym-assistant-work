import { useState } from "react";
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

  const selectExercise = (selectedExercise: SelectedExercise) =>
    setSelectedExercise(selectedExercise);

  const getRightBodyPart = (): BodyPart | undefined => {
    return data?.find(
      (bodyPart: BodyPart) => bodyPart.part === selectedExercise?.bodyPart
    );
  };

  const getRightExercise = () => {
    const bodyPart = getRightBodyPart();
    const exercise = bodyPart?.exercises.find(
      (exercise: ExerciseInformation) =>
        exercise.name === selectedExercise?.name
    );
    return exercise;
  };

  const lastTraining = getRightExercise()?.lastTraining;

  const hookVariables = {
    selectedExercise,
    selectExercise,
    lastTraining,
  };

  const handleRequest = {
    isLoading: isLoading,
    isError: isError,
    data: data,
  };

  const value: NextTrainingContextValue = { hookVariables, handleRequest };

  return (
    <NextTrainingContext.Provider value={value}>
      {children}
    </NextTrainingContext.Provider>
  );
};
