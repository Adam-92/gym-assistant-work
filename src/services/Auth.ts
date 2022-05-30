import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";

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
  setFirebaseError: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
): Promise<void> => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        updateProfile(user, {
          displayName: name,
        });
        navigate("/dashboard");
      }
    })
    .catch((error) => {
      setFirebaseError(error.message);
    });
};

/* export const userAuthState = async (
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>,
  setPending: React.Dispatch<React.SetStateAction<boolean>>
): Promise<any> => {
  auth.onAuthStateChanged((user: User | null) => {
    setCurrentUser(user);
    setPending(true);
  });
}; */

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
      setFirebaseError(
        "We had a problem with loggin you out. Please try again.."
      );
    });
};
