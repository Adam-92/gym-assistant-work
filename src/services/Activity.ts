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

export const getViewExercise = async () => {
  try{
    const { data } = await axios.get(`${host}/viewExercise.json`)
    return data
  } catch (error){
    console.log(error)
  }
}