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
import { StepsValues } from "src/components/Charts/Charts.model";
import { User } from "firebase/auth";
import { arrayNewExercises } from "./converters";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { firstBigLetter } from "src/utils/Utils";
import { NewExercise } from "src/model/model";
import { caloriesChartData } from "./converters";

export const getCaloriesChartData = async () => {
  try {
    const ref = doc(db, "exampleDashboardData/caloriesChart").withConverter(
      caloriesChartData
    );
    const request = await getDoc(ref);

    return request.exists() ? request.data().data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllUsersDataSelectedExercise = async (
  name: string,
  bodyPart: string
) => {
  try {
    const request = await getDoc(
      doc(
        db,
        `/forAllUsersExercises/${firstBigLetter(bodyPart)}`
      ).withConverter(arrayNewExercises)
    );

    if (request.exists()) {
      const data = request.data();
      const selectedExercise = data.exercises.find(
        (exercise: NewExercise) => exercise.name === name
      );
      return selectedExercise;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserDataSelectedExercise = async (
  name: string,
  bodyPart: string,
  userId: string
) => {
  try {
    const request = await getDoc(
      doc(
        db,
        `/userExercises/${userId}/${firstBigLetter(bodyPart)}/exercises`
      ).withConverter(arrayNewExercises)
    );

    if (request.exists()) {
      const data = request.data();
      const selectedExercise = data.exercises.find(
        (exercise: NewExercise) => exercise.name === name
      );
      return selectedExercise;
    }
  } catch (error) {
    console.log(error);
  }
};

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
