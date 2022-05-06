import { app } from "../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const handleSubmit = async (e, values, createOrRegister, setError) => {
  e.preventDefault();
  const { username, email, password, confirm_password } = values;
  const flag = validationForm(values, createOrRegister, setError);

  if (createOrRegister.name === "createUser" && flag) {
    createUser(email, password, setError);
  }
  if (createOrRegister.name === "signInUser" && flag) {
    signInUser(email, password, setError);
  }
};

export const handleChange = (e, inputValues, setInputValues) => {
  setInputValues({
    ...inputValues,
    [e.target.name]: e.target.value,
  });
};

export const createUser = async (email, password, setError) => {
  getFirebaseData(createUserWithEmailAndPassword, email, password, setError);
};

export const signInUser = async (email, password, setError) => {
  getFirebaseData(signInWithEmailAndPassword, email, password, setError);
};

const getFirebaseData = async (requestData, email, password, setError) => {
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

const validationForm = (values, func, setError) => {
  let flag = true;
  const trimmedValues = deleteWhiteSpaces(values);

  if (func.name === "createUser") {
    if (!trimmedValues.username || trimmedValues.username.length < 8) {
      flag = false;
      handleError(
        setError,
        true,
        "Username should be at least 8 characters long!"
      );
    } else if (!trimmedValues.email || !trimmedValues.email.includes("@")) {
      flag = false;
      handleError(
        setError,
        true,
        "Incorrect email address format(f.ex adam@gmail.com)!"
      );
    } else if (!trimmedValues.password || trimmedValues.password.length < 8) {
      flag = false;
      handleError(
        setError,
        true,
        "Password should be at least 8 characters long!"
      );
    } else if (trimmedValues.password !== trimmedValues.confirm_password) {
      flag = false;
      handleError(
        setError,
        true,
        "The password field and confirm password are not the same!"
      );
    }
  } else if (func.name === "signInUser") {
    if (!trimmedValues.email || !trimmedValues.email.includes("@")) {
      flag = false;
      handleError(
        setError,
        true,
        "Please fill or correct the email address field!"
      );
    } else if (!trimmedValues.password || trimmedValues.password.length < 8) {
      flag = false;
      handleError(
        setError,
        true,
        "Password should be at least 8 characters long!"
      );
    }
  } else {
    flag = false;
    setError("Please contact with the administrator");
  }

  return flag;
};

const handleError = (setError, status = false, msg = "") => {
  setError({
    status: status,
    msg: msg,
  });
};

const deleteWhiteSpaces = (values) => {
  let object = {};
  Object.entries(values).forEach(([key, value]) => {
    let deletedSpacesValue = value.trim().split(" ").join("");
    object[key] = deletedSpacesValue;
  });
  return object;
};
