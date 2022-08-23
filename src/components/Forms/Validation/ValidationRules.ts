export const basicValidation = {
  required: "Please fill out this field",
  maxLength: {
    value: 26,
    message: "This field must have 8-26 characters",
  },
  minLength: {
    value: 8,
    message: "This field must have 8-26 characters",
  },
};

export const advancedValidation = {
  ...basicValidation,
  setValueAs: (value: string) => value.split(" ").join(""),
};

export const nameValidation = {
  required: "Please fill out this field",
  maxLength: {
    value: 26,
    message: "This field must have 5-26 characters",
  },
  minLength: {
    value: 5,
    message: "This field must have 5-26 characters",
  },
  setValueAs: (value: string) => value.trim(),
};
