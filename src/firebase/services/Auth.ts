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
  navigate: NavigateFunction
): Promise<void> => {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      if (user) {
        navigate("/dashboard");
      }
    }
  );
};

export const signUp = async (
  name: string,
  password: string,
  email: string
): Promise<void> => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    ({ user }) =>
      setDoc(doc(db, "users", user.uid), {
        userInformation: {
          name: name,
          email: email,
        },
      })
  );
};

export const signOutUser = async (
  navigate: NavigateFunction
): Promise<void> => {
  return signOut(auth).then(() => {
    navigate("/");/*  */
  });
};
