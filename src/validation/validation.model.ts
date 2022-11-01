export interface ValidationRulesInterface {
  required: string;
  maxLength: {
    value: number;
    message: string;
  };
  minLength: {
    value: number;
    message: string;
  };
  setValueAs: (value: string) => string;
}

export interface SelectPicture {
  required: boolean | string;
  disabled: boolean;
}
