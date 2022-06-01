export const loginValidation = {
  required: "Please fill out this field",
  setValueAs: (value: string) => value.split(" ").join(""),
};

export const registerValidation = {
  ...loginValidation,
  maxLength: {
    value: 26,
    message: "This field must have 8-26 characters",
  },
  minLength: {
    value: 8,
    message: "This field must have 8-26 characters",
  },
};
