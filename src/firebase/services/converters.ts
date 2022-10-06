import { QueryDocumentSnapshot } from "firebase/firestore";
import { NewUserExerciseAdded } from "src/firebase/Firebase.model";

export const newExerciseConverter = {
  toFirestore: (data: NewUserExerciseAdded ) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as NewUserExerciseAdded,
};
