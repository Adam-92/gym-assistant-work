import { app } from "../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

export const signIn = async (
  password: string,
  email: string,
  setFirebaseError: React.Dispatch<React.SetStateAction<string>>,
  navigate: any
): Promise<void> => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if(user){
        navigate("/dashboard")
      }
    })
    .catch((error) => {
      setFirebaseError(error.message);
    });
};

export const signUp = async (
  password: string,
  email: string,
  setFirebaseError: React.Dispatch<React.SetStateAction<string>>,
  navigate: any
): Promise<void> => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if(user){
        navigate("/dashboard")
      }
    })
    .catch((error) => {
      setFirebaseError(error.message);
    });
};
