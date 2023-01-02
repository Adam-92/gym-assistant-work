import { availableBodyParts } from "src/pages/catalogue/availableBodyParts";

export function assertBodyPartFromParamsIsValid(
  param: string
): asserts param is typeof availableBodyParts[number] {
  if (!availableBodyParts.some((bodyPart) => bodyPart === param)) {
    throw new Error("Body part recived in param is invalid");
  }
}
