import { personalUserData } from "./AxiosInstances";
import { CatalogueNewExerciseFormValues } from "src/components/Forms/Forms.model";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";
import { db } from "src/firebase/config/firebase";
import { User } from "firebase/auth";
import { arrayNewExercises, stepChartData, tileData } from "./converters";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { firstBigLetter } from "src/utils/Utils";
import { caloriesChartData } from "./converters";

export const getCaloriesChartData = async () => {
  const ref = doc(db, "exampleDashboardData/caloriesChart").withConverter(
    caloriesChartData
  );
  return await getDoc(ref);
};

export const getAllUsersDataSelectedExercise = async (bodyPart: string) =>
  await getDoc(
    doc(db, `/forAllUsersExercises/${firstBigLetter(bodyPart)}`).withConverter(
      arrayNewExercises
    )
  );

export const getUserDataSelectedExercise = async (
  bodyPart: string,
  userId: string
) =>
  await getDoc(
    doc(
      db,
      `/userExercises/${userId}/${firstBigLetter(bodyPart)}/exercises`
    ).withConverter(arrayNewExercises)
  );

export const getWeeklySteps = async () => {
  const request = await getDoc(
    doc(db, "exampleDashboardData/stepsChart").withConverter(stepChartData)
  );
  return request;
};
export const getMonthlySteps = async () => {
  const request = await getDoc(
    doc(db, "exampleDashboardData/stepsChart").withConverter(stepChartData)
  );
  return request;
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
  const request = await getDoc(
    doc(db, `exampleDashboardData/activityTiles`).withConverter(tileData)
  );
  return request;
};
export const getNextTraining = async () => {
  const request = await getDoc(doc(db, `exampleDashboardData/nextTraining`));
  return request;
};
export const getGauges = async () => {
  const request = await getDoc(
    doc(db, `exampleDashboardData/activityGuages`).withConverter(tileData)
  );
  return request;
};

export const getUserExerciseCards = async (userId: string) => {
  try {
    const exerciseRequests = availableBodyParts.map((name: string) =>
      getDoc(
        doc(
          db,
          `userExercises/${userId}/${firstBigLetter(name)}/exercises`
        ).withConverter(arrayNewExercises)
      )
    );

    const exerciseResponses = await Promise.all(exerciseRequests);
    const allExercises = exerciseResponses
      .filter((response) => (response.exists() ? response : false))
      .map((snap) => {
        const exercisesObject = snap.data();
        if (exercisesObject) {
          return exercisesObject.exercises;
        }
        return [];
      });

    return allExercises.flat();
  } catch {
    return [];
  }
};

export const getExercisesForAllUsers = async () => {
  try {
    const exerciseRequests = availableBodyParts.map((name: string) =>
      getDoc(
        doc(db, `forAllUsersExercises/${firstBigLetter(name)}`).withConverter(
          arrayNewExercises
        )
      )
    );
    const exerciseResponses = await Promise.all(exerciseRequests);
    const allExercises = exerciseResponses
      .filter((response) => (response.exists() ? response : false))
      .map((snap) => {
        const exercisesObject = snap.data();
        if (exercisesObject) {
          return exercisesObject.exercises;
        }
        return [];
      });

    return allExercises.flat();
  } catch {
    return [];
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
    const ref = doc(
      db,
      `userExercises/${currentUser?.uid}/${data.part}/exercises/`
    );

    const exerciseDoc = await getDoc(ref);

    if (exerciseDoc.exists()) {
      await updateNewExercise(ref, data);
    } else {
      await addNewExercise(ref, data);
    }

    onSnapshot(
      doc(db, `userExercises/${currentUser?.uid}/${data.part}/exercises`),
      () => {
        onSuccess(data.part.toLowerCase());
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const updateNewExercise = async (
  ref: DocumentReference<DocumentData>,
  data: CatalogueNewExerciseFormValues
) => {
  updateDoc(ref.withConverter(arrayNewExercises), {
    exercises: arrayUnion({
      name: data.name.toLowerCase(),
      exerciseDescription: data.exerciseDescription,
      secondaryMuscle: data.secondaryMuscle,
      exampleImage: data.exampleImage ?? "",
      urlImage: data.urlImage,
      part: data.part,
      results: [{ label: "", sets: [{ weight: 0, reps: 0 }] }],
    }),
  });
};

const addNewExercise = async (
  ref: DocumentReference<DocumentData>,
  data: CatalogueNewExerciseFormValues
) => {
  setDoc(ref.withConverter(arrayNewExercises), {
    exercises: [
      {
        name: data.name.toLowerCase(),
        exerciseDescription: data.exerciseDescription,
        secondaryMuscle: data.secondaryMuscle,
        exampleImage: data.exampleImage ?? "",
        urlImage: data.urlImage,
        part: data.part,
        allUsers: false,
        results: [{ label: "", sets: [{ weight: 0, reps: 0 }] }],
      },
    ],
  });
};
