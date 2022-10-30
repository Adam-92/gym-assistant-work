import { ValidationRulesInterface, SelectPicture } from "./validation.model";

export const validationWithoutWhiteSpaces = (
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

export const validationWithWhiteSpaces = (
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
    setValueAs: (value: string) => value.trim(),
  };
};

const imageUrlRegex = /^https?:\/\/.+\.(jpg|jpeg|png)$/;

export const isValidImageUrl = (value: string) => {
  if (!value) return true;
  if (imageUrlRegex.test(value)) return true;
  return "We support only types .jpeg, .jpg, .png";
};

export const validateProposalImage = (addedImageUrl: string): SelectPicture =>
  addedImageUrl
    ? { required: false, disabled: true }
    : { required: "Select or leave url link", disabled: false };
