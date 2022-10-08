import { useState } from "react";
import { signUp } from "src/firebase/services/Auth";

const useSignUp = () => {
  const [firebaseError, setfirebaseError] = useState("");
  const makeRequest = (name: string, password: string, email: string) =>
    signUp(name, password, email).catch((error) => {
      console.log(error);
      setfirebaseError(error.message);
    });

  return {
    makeRequest,
    firebaseError,
    setfirebaseError,
  };
};

export default useSignUp;
