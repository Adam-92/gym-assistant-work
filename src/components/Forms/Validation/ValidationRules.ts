import React from "react";
import { ValidationRulesInterface, SelectPicture } from "./Validation.model";

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

export const validateUrl = (
  setUserNotAddUrl: React.Dispatch<React.SetStateAction<boolean>>,
  clearErrors: (
    name?: string | string[] | readonly string[] | undefined
  ) => void
) => {
  return {
    validate: {
      isImage: (value: string) =>
        (value && /^https?:\/\/.+\.(jpg|jpeg|png)$/.test(value)) ||
        (value && "We support only types .jpeg, .jpg, .png") ||
        (!value && true),
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setUserNotAddUrl(false);
        clearErrors("exampleImage");
      } else {
        setUserNotAddUrl(true);
      }
    },
  };
};

export const validateProposalImage = (userNotAddUrl: boolean): SelectPicture =>
  userNotAddUrl
    ? { required: "Select or leave url link", disabled: false }
    : { required: false, disabled: true };
