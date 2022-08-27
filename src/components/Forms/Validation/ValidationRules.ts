import { ValidationRulesInterface, SelectPicture } from "./Validation.model";

export const validation = (
  minLength: number,
  maxLength: number
): ValidationRulesInterface => {
  return {
    required: "Please fill out this field",
    maxLength: {
      value: maxLength,
      message: `This field must have ${minLength}-${maxLength} characters`,
    },
    minLength: {
      value: minLength,
      message: `This field must have ${minLength}-${maxLength} characters`,
    },
    setValueAs: (value: string) => value.split(" ").join(""),
  };
};

export const selectPictureValidation = (
  isFileExist: boolean
): SelectPicture => {
  return isFileExist
    ? { required: false, disabled: true }
    : { required: "Select or upload the image", disabled: false };
};

export const uplodedPictureValidation = (
  isFileExist: boolean,
  setIsFileExist: React.Dispatch<React.SetStateAction<boolean>>,
  clearErrors: (
    name?: string | string[] | readonly string[] | undefined
  ) => void
) => {
  return isFileExist
    ? {
        validate: {
          isTooBig: (value: any) =>
            (value[0] && value[0].size <= 2000000) ||
            "Max size of the image is 2mb",
          supportedTypes: (value: any) =>
            (value[0] && value[0].type === "image/jpeg") ||
            value[0].type === "image/png" ||
            value[0].type === "image/jpg" ||
            "We support only types .jpeg, .jpg, .png",
        },
      }
    : {
        onChange: () => {
          setIsFileExist(true);
          clearErrors(["exampleImage", "cataloguePicture"]);
        },
      };
};
