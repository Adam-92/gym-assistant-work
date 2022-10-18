import { personalUserData } from "./AxiosInstances";
import { CatalogueNewExerciseFormValues } from "src/components/Forms/Forms.model";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "src/firebase/config/firebase";
import { StepsValues } from "src/components/Charts/Charts.model";
import { User } from "firebase/auth";
import { arrayNewExercises } from "./converters";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { firstBigLetter } from "src/utils/Utils";

export const getCaloriesChartData = async () => {
  try {
    return await (
      await personalUserData.get(`caloriesChartData.json`)
    ).data;
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
/* 
Scieżka troszkę przeszkadza by zaoszczędzić kodu i nie pisać niemalże tych samych
funkcji, czyli "getUserExerciseCards" oraz  "getExercisesForAllUsers".
Stąd to "/exercises" ... no długo by tlumaczyć.. ale musi być parzysta liczba ścieżek 
w Firestore

Zobacz -> 
  `userExercises/${userId}/${firstBigLetter(name)}/exercises`
  `forAllUsersExercises/${firstBigLetter(name)}`

Może masz pomysł?
*/

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

    const exerciseResponses = await (
      await Promise.all(exerciseRequests)
    )
      .filter((response) => (response.exists() ? response : false))
      .map((snap) => {
        const exercisesObject = snap.data();
        if (exercisesObject) {
          return exercisesObject.exercises;
        }
        return [];
      });

    return exerciseResponses.flat();
  } catch (error) {
    console.log(error);
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
    const exerciseResponses = await (
      await Promise.all(exerciseRequests)
    )
      .filter((response) => {
        return response.exists() ? response : false;
      })
      .map((snap) => {
        const exercisesObject = snap.data();
        if (exercisesObject) {
          return exercisesObject.exercises;
        }
        return [];
      });

    return exerciseResponses.flat();
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
    const ref = doc(
      db,
      `userExercises/${currentUser?.uid}/${data.part}/exercises/`
    );

    const checkIfExist = await (await getDoc(ref)).exists();

    if (checkIfExist) {
      await updateDoc(ref.withConverter(arrayNewExercises), {
        exercises: arrayUnion({
          name: data.name,
          exerciseDescription: data.exerciseDescription,
          secondaryMuscle: data.secondaryMuscle,
          exampleImage: data.exampleImage ?? "",
          urlImage: data.urlImage,
          part: data.part,
        }),
      });
    } else {
      await setDoc(ref.withConverter(arrayNewExercises), {
        exercises: [
          {
            name: data.name,
            exerciseDescription: data.exerciseDescription,
            secondaryMuscle: data.secondaryMuscle,
            exampleImage: data.exampleImage ?? "",
            urlImage: data.urlImage,
            part: data.part,
          },
        ],
      });
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
