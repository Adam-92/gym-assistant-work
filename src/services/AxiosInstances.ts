import axios from "axios";

export const personalUserData = axios.create({
  baseURL: "http://localhost:3000/data/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const globalDataForAllUsers = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/gym-assistant-29736/databases/(default)/documents/globalData/",
  timeout: 1000,
});
