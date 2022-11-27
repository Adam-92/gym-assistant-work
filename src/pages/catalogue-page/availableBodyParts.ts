export const availableBodyParts = [
  "chest",
  "biceps",
  "triceps",
  "back",
  "abs",
  "legs",
  "shoulders",
] as const;

export type AvailableBodyParts = typeof availableBodyParts[number];

