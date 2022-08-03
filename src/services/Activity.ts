import { instance } from "./AxiosInstances"
import { StepsValues } from "src/model/StepChart.model";

export const getDailySteps = async (): Promise<StepsValues[] | undefined> => {
  try {
    return await (await instance.get(`dailySteps.json`)).data
  } catch (error) {
    console.log(error);
  }
};
export const getMonthlySteps = async (): Promise<StepsValues[] | undefined> => {
  try {
    return await (
      await instance.get(`monthlySteps.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getCarouselCharacters = async () => {
  try {
    return await (
      await instance.get(`charactersCaroussel.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getTilesData = async () => {
  try {
    return await (
      await instance.get(`tiles.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getNextTraining = async () => {
  try {
    return await (
      await instance.get(`nextTraining.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getGauges = async () => {
  try {
    return await (
      await instance.get(`guages.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getExerciseCards = async () => {
  try {
    return await (
      await instance.get(`exerciseCards.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getCatalogue = async () => {
  try {
    return await (
      await instance.get(`bodyParts.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const getViewExercise = async () => {
  try {
    return await (
      await instance.get(`viewExercise.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
