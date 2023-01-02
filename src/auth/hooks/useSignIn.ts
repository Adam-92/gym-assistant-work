import { useState } from "react";
import { parseError } from "src/errors/parseError";
import { signIn } from "../services/signIn";
import { SignInCredentials } from "../services/signIn";

const useSignIn = () => {
  const [error, setError] = useState("");

  const makeRequest = async (credentials: SignInCredentials) => {
    try {
      await signIn(credentials);
    } catch (error) {
      setError(parseError(error));
    }
  };

  return {
    makeRequest,
    error,
  };
};

export default useSignIn;
