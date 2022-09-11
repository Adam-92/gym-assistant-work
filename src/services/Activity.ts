import { personalUserData, globalDataForAllUsers } from "./AxiosInstances";
import { CatalogueNewExerciseFormValues } from "src/model/Forms.model";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { StepsValues } from "src/model/StepChart.model";
import { User } from "firebase/auth";
import { newExerciseConverter } from "./converters";

export const getDailySteps = async (): Promise<StepsValues[] | undefined> => {
  try {
    return await (
      await personalUserData.get(`dailySteps.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getMonthlySteps = async (): Promise<StepsValues[] | undefined> => {
  try {
    return await (
      await personalUserData.get(`monthlySteps.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getCarouselCharacters = async () => {
  try {
    return await (
      await personalUserData.get(`charactersCaroussel.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getTilesData = async () => {
  try {
    return await (
      await personalUserData.get(`tiles.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getNextTraining = async () => {
  try {
    return await (
      await personalUserData.get(`nextTraining.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getGauges = async () => {
  try {
    return await (
      await personalUserData.get(`guages.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getExerciseCards = async () => {
  try {
    return await (
      await personalUserData.get(`exerciseCards.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};
export const getCatalogue = async () => {
  try {
    return await (await getDoc(doc(db, "globalData", "catalogue"))).data();
  } catch (error) {
    console.log(error);
  }
};

export const getViewExercise = async () => {
  try {
    return await (
      await personalUserData.get(`viewExercise.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const getSecondaryArrangeMuscles = async () => {
  try {
    return await (
      await personalUserData.get(`secondaryArrangeMuscles.json`)
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const getExamplePicturesAddNew = async () => {
  try {
    return (await personalUserData.get(`examplePicturesAddCatalogue.json`))
      .data;
  } catch (error) {
    console.log(error);
  }
};

export const setNewExercise = async (
  data: CatalogueNewExerciseFormValues,
  currentUser: User
) => {
  try {
    await setDoc(
      doc(db, `users/${currentUser.uid}`).withConverter(newExerciseConverter),
      {
        userAddedExercises: {
          [`${data.part}`]: [
            {
              name: data.name,
              tips: data.tips,
              secondaryMuscle: data.secondaryMuscle,
              exampleImage: data.exampleImage,
            },
          ],
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};
