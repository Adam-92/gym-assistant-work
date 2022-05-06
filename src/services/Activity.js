const host = "http://localhost:3000/data"
export const getDailySteps = async () => {
  const response = await fetch(`${host}/dailySteps.json`);
  return response.json();
};
export const getMonthlySteps = async () => {
  const response = await fetch(`${host}/monthlySteps.json`);
  return response.json();
};
export const getCarouselCharacters = async () => {
  const response = await fetch(`${host}/charactersCarousel.json`);
  return response.json();
};
export const getTilesData = async () => {
  const response = await fetch(`${host}/tiles.json`);
  return response.json();
};
export const getNextTraining = async () => {
  const response = await fetch(`${host}/nextTraining.json`);
  return response.json();
};
export const getGauges = async () => {
  const response = await fetch(`${host}/guages.json`);
  return response.json();
};
export const exampleDays = () => {
  return [
    {
      day: "Mon",
      steps: 1000,
    },
    {
      day: "Tue",
      steps: 1000,
    },
    {
      day: "Wed",
      steps: 1000,
    },
    {
      day: "Thu",
      steps: 1000,
    },
    {
      day: "Fri",
      steps: 1000,
    },
    {
      day: "Sat",
      steps: 1000,
    },
    {
      day: "Sun",
      steps: 1000,
    },
  ];
};

export const exampleMonths = () => {
  return [
    {
      day: "Mon",
      steps: 1000,
    },
    {
      day: "Tue",
      steps: 1000,
    },
    {
      day: "Wed",
      steps: 1000,
    },
    {
      day: "Thu",
      steps: 1000,
    },
    {
      day: "Fri",
      steps: 1000,
    },
    {
      day: "Sat",
      steps: 1000,
    },
    {
      day: "Sun",
      steps: 1000,
    },
  ];
};

