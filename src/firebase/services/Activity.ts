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
import {
  arrayNewExercises,
  nextTrainingData,
  stepChartData,
  tileData,
  guagesData,
} from "./converters";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { firstBigLetter } from "src/utils/Utils";
import { caloriesChartData } from "./converters";
import { AvailableBodyParts } from "src/pages/catalogue-page/availableBodyParts";

export const getCaloriesChartData = async () => {
  const request = await getDoc(
    doc(db, "exampleDashboardData/caloriesChart").withConverter(
      caloriesChartData
    )
  );
  return request;
};

export const getAllUsersDataSelectedExercise = async (
  bodyPart: AvailableBodyParts
) => {
  const request = await getDoc(
    doc(db, `/forAllUsersExercises/${firstBigLetter(bodyPart)}`).withConverter(
      arrayNewExercises
    )
  );
  return request;
};

export const getUserDataSelectedExercise = async (
  bodyPart: AvailableBodyParts,
  userId: string
) => {
  const request = await getDoc(
    doc(
      db,
      `/userExercises/${userId}/${firstBigLetter(bodyPart)}/exercises`
    ).withConverter(arrayNewExercises)
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

export const getExercisesForUser = (currentUser: User | null) => {
  const exerciseRequests = availableBodyParts.map((name) =>
    getDoc(
      doc(
        db,
        `userExercises/${currentUser?.uid}/${firstBigLetter(name)}/exercises`
      ).withConverter(arrayNewExercises)
    )
  );

  return Promise.all(exerciseRequests);
};

export const getExercisesForAllUsers = () => {
  const exerciseRequests = availableBodyParts.map((name) =>
    getDoc(
      doc(db, `forAllUsersExercises/${firstBigLetter(name)}`).withConverter(
        arrayNewExercises
      )
    )
  );
  return Promise.all(exerciseRequests);
};

export const setNewExercise = async (
  data: CatalogueNewExerciseFormValues,
  currentUser: User | null,
  onSuccess: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const ref = doc(
      db,
      `userExercises/${currentUser?.uid}/${firstBigLetter(
        data.part
      )}/exercises/`
    );

    const exerciseDoc = await getDoc(ref);

    if (exerciseDoc.exists()) {
      await addExercise(ref, data);
    } else {
      await createArrayOfExercises(ref, data);
    }

    onSnapshot(
      doc(
        db,
        `userExercises/${currentUser?.uid}/${firstBigLetter(
          data.part
        )}/exercises`
      ),
      () => onSuccess(data.part.toLowerCase())
    );
  } catch (error) {
    console.log(error);
  }
};

const addExercise = async (
  ref: DocumentReference<DocumentData>,
  data: CatalogueNewExerciseFormValues
) =>
  await updateDoc(ref.withConverter(arrayNewExercises), {
    exercises: arrayUnion({
      name: data.name.toLowerCase(),
      exerciseDescription: data.exerciseDescription,
      secondaryMuscle: data.secondaryMuscle,
      exampleImage: data.exampleImage ?? "",
      urlImage: data.urlImage,
      part: data.part,
      allUsers: false,
      results: [{ label: "", sets: [{ weight: 0, reps: 0 }] }],
    }),
  });

const createArrayOfExercises = async (
  ref: DocumentReference<DocumentData>,
  data: CatalogueNewExerciseFormValues
) =>
  await setDoc(ref.withConverter(arrayNewExercises), {
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
