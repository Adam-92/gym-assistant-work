import { AvailableBodyParts } from "../catalogue/availableBodyParts";

export interface IconsDescription {
  name: AvailableBodyParts;
  pathImg: string;
  style?: IconsDescriptionStyle;
}

export interface IconsDescriptionStyle {
  leftPosition: number;
  topPosition: number;
  width: number;
}
