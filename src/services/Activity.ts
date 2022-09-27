import { personalUserData } from "./AxiosInstances";
import { CatalogueNewExerciseFormValues } from "src/model/Forms.model";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { StepsValues } from "src/model/StepChart.model";
import { User } from "firebase/auth";
import { newExerciseConverter } from "./converters";
import { bodyPartsSelectionCatalogue } from "src/pages/catalogue-page/bodyPartsSelectionCatalogue";

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

export const getExerciseCards = async (userId: string) => {
  try {
    const queries = bodyPartsSelectionCatalogue.map(({ name }) =>
      getDoc(doc(db, `userExercises/${userId}/${name}/exercises`))
    );

    const data = await Promise.all(queries).then((doc) =>
      doc.forEach((snap) => console.log(snap))
    );

    /*  
    return [
     {
      "bodyPart": "chest",
      "exercises": [
        { 
         "id": 1,
         "name": "Bench Press",
         "img": "https://www.muscleandfitness.com/wp-content/uploads/2019/04/10-Exercises-Build-Muscle-Bench-Press.jpg?quality=86&strip=all",
         "arrangeMuscles": {
          "main": "Middle Chest",
          "secondary": ["Triceps", "Arms"]
      },
      {
      "bodyPart": "legs",
      "exercises": []
    ] */
    
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
      doc(
        db,
        `userExercises/${currentUser.uid}/${data.part}/exercises/`
      ).withConverter(newExerciseConverter),
      {
        [`${data.name}`]: {
          tips: data.tips,
          secondaryMuscle: data.secondaryMuscle,
          //exampleImage - jeżeli jest podany url, wtedy exampleImage jest undefined, a tego typu Firebase nie obsługuje
          exampleImage: data.exampleImage ? data.exampleImage : "",
          urlImage: data.urlImage,
        },
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};
