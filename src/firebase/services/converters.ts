import { QueryDocumentSnapshot } from "firebase/firestore";
import { CreateNewArrayExercises } from "src/firebase/Firebase.model";

export const arrayNewExercises = {
  toFirestore: (data: CreateNewArrayExercises) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as CreateNewArrayExercises,
};

