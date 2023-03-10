import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIQP4uoCQGz6jYw0qrtE9nM3FG6koZgIY",
  authDomain: "gym-assistant-29736.firebaseapp.com",
  projectId: "gym-assistant-29736",
  storageBucket: "gym-assistant-29736.appspot.com",
  messagingSenderId: "846002176313",
  appId: "1:846002176313:web:e0d2b514afc5af8c77e8e8",
  measurementId: "G-J0C3JK4DYC",
  databaseURL:
    "https://gym-assistant-29736-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, storage, db };
