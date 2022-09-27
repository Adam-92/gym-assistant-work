import { QueryDocumentSnapshot } from "firebase/firestore";
import { NewUserExerciseAdded } from "src/model/Firebase.model";

export const newExerciseConverter = {
  toFirestore: (data: NewUserExerciseAdded ) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data(),
};
