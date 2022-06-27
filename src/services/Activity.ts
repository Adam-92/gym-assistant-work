import axios from "axios";
const host = "http://localhost:3000/data";

export const getDailySteps = async () => {
  try {
    const { data } = await axios.get(`${host}/dailySteps.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMonthlySteps = async () => {
  try {
    const { data } = await axios.get(`${host}/monthlySteps.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCarouselCharacters = async () => {
  try {
    const { data } = await axios.get(`${host}/charactersCarousel.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getTilesData = async () => {
  try {
    const { data } = await axios.get(`${host}/tiles.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getNextTraining = async () => {
  try {
    const { data } = await axios.get(`${host}/nextTraining.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getGauges = async () => {
  try {
    const { data } = await axios.get(`${host}/guages.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getExerciseCards = async () => {
  try {
    const { data } = await axios.get(`${host}/exerciseCards.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBodyParts = async () => {
  try {
    const { data } = await axios.get(`${host}/bodyParts.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
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
      day: "Jun",
      steps: 6400,
    },
    {
      day: "Feb",
      steps: 5300,
    },
    {
      day: "Mar",
      steps: 12400,
    },
    {
      day: "Apr",
      steps: 8845,
    },
    {
      day: "May",
      steps: 9400,
    },
    {
      day: "June",
      steps: 1200,
    },
    {
      day: "July",
      steps: 9000,
    },
    {
      day: "Aug",
      steps: 12400,
    },
    {
      day: "Sep",
      steps: 8845,
    },
    {
      day: "Oct",
      steps: 9400,
    },
    {
      day: "Nov",
      steps: 1200,
    },
    {
      day: "Dec",
      steps: 9000,
    },
  ];
};
