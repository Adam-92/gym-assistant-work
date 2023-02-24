import { DocumentSnapshot } from "firebase/firestore";
import { CreateNewArrayExercises } from "src/firebase/Firebase.model";

export const handleResponse = (
    responses: DocumentSnapshot<CreateNewArrayExercises>[]
  ) => {
    const checkResponses = responses.filter((response) =>
      response.exists() ? response : null
    );
    const exercises = checkResponses.map((exercise) =>
      exercise.exists() ? exercise.data().exercises : []
    );
    return exercises.flat();
  };
