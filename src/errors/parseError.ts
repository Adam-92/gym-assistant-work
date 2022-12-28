import { errorWithMessage } from "./errorWithMessage";

export const parseError = (error: unknown) => {
  if (errorWithMessage(error)) {
    return error.message;
  }

  return "Something went wrong.";
};
