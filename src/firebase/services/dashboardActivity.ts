import {
  caloriesChartData,
  stepChartData,
  tileData,
  nextTrainingData,
  guagesData,
} from "../converters";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getCaloriesChartData = async () => {
  const request = await getDoc(
    doc(db, "exampleDashboardData/caloriesChart").withConverter(
      caloriesChartData
    )
  );
  return request;
};

export const getWeeklySteps = async () => {
  const request = await getDoc(
    doc(db, "exampleDashboardData/stepsChart").withConverter(stepChartData)
  );
  return request;
};

export const getMonthlySteps = async () => {
  const request = await getDoc(doc(db, "exampleDashboardData/stepsChart"));
  return request;
};

export const getTilesData = async () => {
  const request = await getDoc(
    doc(db, `exampleDashboardData/activityTiles`).withConverter(tileData)
  );
  return request;
};

export const getNextTraining = async () => {
  const request = await getDoc(
    doc(db, `exampleDashboardData/nextTraining`).withConverter(nextTrainingData)
  );
  return request;
};

export const getGauges = async () => {
  const request = await getDoc(
    doc(db, `exampleDashboardData/activityGuages`).withConverter(guagesData)
  );
  return request;
};
