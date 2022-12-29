import { useState } from "react";
import { parseError } from "src/errors/parseError";
import { signUp } from "../services/signUp";
import { SignUpCredentials } from "../services/signUp";

const useSignUp = () => {
  const [error, setError] = useState("");

  const makeRequest = async (credentials: SignUpCredentials) => {
    try {
      await signUp(credentials);
    } catch (error) {
      setError(parseError(error));
    }
  };

  return {
    makeRequest,
    error,
  };
};

export default useSignUp;
