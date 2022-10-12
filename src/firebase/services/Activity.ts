import { personalUserData } from "./AxiosInstances";
import { CatalogueNewExerciseFormValues } from "src/components/Forms/Forms.model";
import {
  doc,
  setDoc,
  getDoc,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import { db } from "src/firebase/config/firebase";
import { StepsValues } from "src/components/Charts/Charts.model";
import { User } from "firebase/auth";
import { newExerciseConverter } from "./converters";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { firstBigLetter } from "src/utils/Utils";


export const getCaloriesChartData = async () => {
  try{
    return await (await personalUserData.get(`caloriesChartData.json`)).data
  }catch(error){  
    console.log(error)
  }
}

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
/* Musze korzystac z tej funkcji, gdy partia posiada wiecej niz jedno cwiczenie, w innym przypadku
jezeli zrobic loop w exerciseResponses to zwraca jedno cwiczenie zamiast dwóch */

/* 
Problem z typem tutaj - nie mogę użyć 
NewUserExerciseAdded typu z convertera dla parametru exercise tej funkcji... krzyczy o indeksach ;d
*/
const restructureObjectExercises = (exercise: DocumentData | undefined) => {
  const exercises = [];
  for (const property in exercise) {
    exercises.push({
      name: property,
      description: exercise[property].exerciseDescription,
      urlImage: exercise[property].urlImage,
      secondaryMuscle: exercise[property].secondaryMuscle,
      exampleImage: exercise[property].exampleImage,
      part: exercise[property].part,
    });
  }
  return exercises;
};

export const getUserExerciseCards = async (userId: string) => {
  try {
    const exerciseRequests = availableBodyParts.map((name: string) =>
      getDoc(
        doc(
          db,
          `userExercises/${userId}/${firstBigLetter(name)}/exercises`
        ).withConverter(newExerciseConverter)
      )
    );

    const exerciseResponses = await (await Promise.all(exerciseRequests))
      .filter((response) => (response.exists() ? response : false))
      .map((snap) => restructureObjectExercises(snap.data()));

    return exerciseResponses.flat();
  } catch (error) {
    console.log(error);
  }
};

export const getExampleExerciseCards = async () => {
  try {
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
  currentUser: User | null,
  onSuccess: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    await setDoc(
      doc(
        db,
        `userExercises/${currentUser?.uid}/${data.part}/exercises/`
      ).withConverter(newExerciseConverter),
      {
        [`${data.name}`]: {
          exerciseDescription: data.exerciseDescription,
          secondaryMuscle: data.secondaryMuscle,
          exampleImage: data.exampleImage ?? "",
          urlImage: data.urlImage,
          part: data.part.toLowerCase(),
        },
      },
      { merge: true }
    );

    onSnapshot(
      doc(db, `userExercises/${currentUser?.uid}/${data.part}/exercises`),
      (doc) => onSuccess(data.part.toLowerCase())
    );
  } catch (error) {
    console.log(error);
  }
};
