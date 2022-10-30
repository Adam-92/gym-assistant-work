import { isErrorWithMessage } from "./isErrorWithMessage";

export const parseError = (error: unknown) => {
  if (isErrorWithMessage(error)) {
    return error.message;
  }

  return "Something went wrong.";
};
