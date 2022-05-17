import { app } from "../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

/* export const handleSubmit = async (e, values, createOrRegister, setError) => {
  e.preventDefault();
  const { username, email, password, confirm_password } = values;
  const flag = validationForm(values, createOrRegister, setError);

  if (createOrRegister.name === "createUser" && flag) {
    createUser(email, password, setError);
  }
  if (createOrRegister.name === "signInUser" && flag) {
    signInUser(email, password, setError);
  }
}; */


/* export const createUser = async (email, password, setError) => {
  getFirebaseData(createUserWithEmailAndPassword, email, password, setError);
};

export const signInUser = async (email, password, setError) => {
  getFirebaseData(signInWithEmailAndPassword, email, password, setError);
}; */

/* const getFirebaseData = async (requestData, email, password, setError) => {
  const auth = getAuth(app);
  requestData(auth, email, password)
    .then((user) => {
      if (user) {
        console.log(user)
      }
    })
    .catch((error) => {
      console.log(error)
      const errorMessage = error.message;
      handleError(setError, true, errorMessage);
    });
};
 */

/* const deleteWhiteSpaces = (values) => {
  let object = {};
  Object.entries(values).forEach(([key, value]) => {
    let deletedSpacesValue = value.trim().split(" ").join("");
    object[key] = deletedSpacesValue;
  });
  return object;
}; */
