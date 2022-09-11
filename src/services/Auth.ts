import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

export const signIn = async (
  password: string,
  email: string,
  setFirebaseError: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
): Promise<void> => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        navigate("/dashboard");
      }
    })
    .catch((error) => {
      setFirebaseError(error.message);
    });
};

export const signUp = async (
  name: string,
  password: string,
  email: string,
  setFirebaseError: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) =>
      setDoc(doc(db, "users", user.uid), {
        userInformation: {
          name: name,
          email: email,
        },
      })
    )
    .catch((error) => {
      setFirebaseError(error.message);
    });
};

export const signOutUser = async (
  setFirebaseError: React.Dispatch<React.SetStateAction<string | null>>,
  navigate: NavigateFunction
): Promise<void> => {
  signOut(auth)
    .then(() => {
      setFirebaseError("Thanks! See you later...");
      navigate("/");
    })
    .catch((error) => {
      setFirebaseError(error.message);
    });
};
