import { CatalogueNewExerciseFormValues } from "src/pages/add-new-catalogue-exercise/AddNewCatalogueExercisePage.model";
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
import { arrayNewExercises } from "../converters";
import { availableBodyParts } from "src/pages/catalogue/availableBodyParts";
import { firstBigLetter } from "src/utils/Utils";
import { AvailableBodyParts } from "src/pages/catalogue/availableBodyParts";

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

export const getExercisesForUser = (userId: string) => {
  const exerciseRequests = availableBodyParts.map((name) =>
    getDoc(
      doc(
        db,
        `userExercises/${userId}/${firstBigLetter(name)}/exercises`
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
  userId: string,
  onSuccess: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const ref = doc(
      db,
      `userExercises/${userId}/${firstBigLetter(data.part)}/exercises/`
    );

    const exerciseDoc = await getDoc(ref);

    if (exerciseDoc.exists()) {
      await addExercise(ref, data);
    } else {
      await createArrayOfExercises(ref, data);
    }

    onSnapshot(
      doc(db, `userExercises/${userId}/${firstBigLetter(data.part)}/exercises`),
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

export const updateExerciseName = async (
  userId: string,
  data: CatalogueNewExerciseFormValues,
  name: string
) => {
  const ref = doc(
    db,
    `userExercises/${userId}/${firstBigLetter(data.part)}/exercises/`
  );

  await updateDoc(ref.withConverter(arrayNewExercises), {
    exercises: arrayUnion({
      name: name.toLowerCase(),
    }),
  });
};
