import { useState } from "react";
import { parseError } from "src/errors/parseError";
import { signUp } from "../services/signUp";

const useSignUp = () => {
  const [error, setError] = useState("");
  const makeRequest = async (name: string, password: string, email: string) => {
    try {
      await signUp(name, password, email);
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
