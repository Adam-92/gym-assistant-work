export const secondaryArrange = [
  {
    id: 1,
    name: "Upper pecs",
  },
  {
    id: 2,
    name: "Lower pecs",
  },
  {
    id: 3,
    name: "Lats",
  },
  {
    id: 4,
    name: "Traps",
  },
  {
    id: 5,
    name: "Obliques",
  },
  {
    id: 6,
    name: "Abs",
  },
  {
    id: 7,
    name: "Triceps",
  },
  {
    id: 8,
    name: "Forearms",
  },
  {
    id: 9,
    name: "Front delts",
  },
  {
    id: 10,
    name: "Side delts",
  },
  {
    id: 11,
    name: "Rear delts",
  },
  {
    id: 12,
    name: "Quadriceps",
  },
  {
    id: 13,
    name: "Hamstrings",
  },
  {
    id: 14,
    name: "Glutes",
  },
  {
    id: 15,
    name: "Calves",
  },
] as const;

export type SecondaryArrange = typeof secondaryArrange[number];
