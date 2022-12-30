import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "src/firebase/config/firebase";

export interface SignUpCredentials {
  username: string;
  password: string;
  email: string;
}

export const signUp = async (credentials: SignUpCredentials) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  );

  await setDoc(doc(db, "users", user.uid), {
    userInformation: {
      name: credentials.username,
      email: credentials.email,
    },
  });
};
