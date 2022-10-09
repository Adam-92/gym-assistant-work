import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserCredential } from "firebase/auth";

export const signIn = async (
  password: string,
  email: string
): Promise<UserCredential> => signInWithEmailAndPassword(auth, email, password);

export const signUp = async (
  name: string,
  password: string,
  email: string
): Promise<void> =>
  createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
    setDoc(doc(db, "users", user.uid), {
      userInformation: {
        name: name,
        email: email,
      },
    })
  );

export const signOutUser = async (): Promise<void> => signOut(auth);
