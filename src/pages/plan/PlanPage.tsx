import {
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "src/firebase/config/firebase";

const PlanPage = () => {
  const bodyParts = [
    "Chest",
    "Back",
    "Biceps",
    "Legs",
    "Triceps",
    "Shoulders",
    "Abs",
  ] as const;
  type BigLetterAvailableBodyParts = typeof bodyParts[number];

  const bodyPart: BigLetterAvailableBodyParts = "Chest";
  const name = "".toLowerCase();
  const exerciseDescription = "";
  const secondaryMuscle = [""];
  const urlImage = "";

  const ref = doc(db, `forAllUsersExercises/${bodyPart}`);

  const createNewArray = async () => {
    try {
      await setDoc(ref, {
        exercises: [
          {
            name: `${name}`,
            exerciseDescription: `${exerciseDescription}`,
            secondaryMuscle: secondaryMuscle,
            exampleImage: "",
            urlImage: `${urlImage}`,
            part: `${bodyPart}`.toLowerCase(),
            allUsers: true,
            results: [
              {
                label: "12.07",
                sets: [
                  { weight: 85, reps: 6 },
                  { weight: 90, reps: 5 },
                  { weight: 90, reps: 5 },
                  { weight: 92, reps: 2 },
                ],
              },
              {
                label: "17.07",
                sets: [
                  { weight: 90, reps: 5 },
                  { weight: 92, reps: 4 },
                  { weight: 92, reps: 4 },
                ],
              },
              {
                label: "19.07",
                sets: [
                  { weight: 95, reps: 5 },
                  { weight: 95, reps: 5 },
                  { weight: 97, reps: 3 },
                ],
              },
              {
                label: "21.07",
                sets: [
                  { weight: 95, reps: 5 },
                  { weight: 95, reps: 5 },
                  { weight: 97, reps: 3 },
                ],
              },
              {
                label: "27.07",
                sets: [
                  { weight: 95, reps: 5 },
                  { weight: 95, reps: 5 },
                  { weight: 98, reps: 3 },
                ],
              },
              {
                label: "30.07",
                sets: [
                  { weight: 102, reps: 5 },
                  { weight: 102, reps: 5 },
                  { weight: 105, reps: 1 },
                ],
              },
            ],
          },
        ],
      });
      onSnapshot(doc(db, `forAllUsersExercises/${bodyPart}`), (doc) => {
        if (doc.exists()) {
          alert(`New ex section --> ${bodyPart} `);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const addToExistedArray = async () => {
    await updateDoc(ref, {
      exercises: arrayUnion({
        name: `${name}`,
        exerciseDescription: `${exerciseDescription}`,
        secondaryMuscle: secondaryMuscle,
        exampleImage: "",
        urlImage: `${urlImage}`,
        part: `${bodyPart}`.toLowerCase(),
        allUsers: true,
        results: [
          {
            label: "",
            sets: [
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
            ],
          },
          {
            label: "",
            sets: [
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
            ],
          },
          {
            label: "",
            sets: [
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
            ],
          },
          {
            label: "",
            sets: [
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
              { weight: 0, reps: 0 },
            ],
          },
        ],
      }),
    });
  };

  return (
    <>
      <h2 style={{ color: "red" }}>CREATE ARRAY: </h2>
      <button onClick={createNewArray}>Click</button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2 style={{ color: "green" }}>Add new exercise TO EXISTED ARRAY: </h2>
      <button onClick={addToExistedArray}>Click</button>

      {/*       <h2>Add new data to dashboard</h2>
      <button onClick={addNewDataToDashboard}>Click</button> */}
    </>
  );
};
export default PlanPage;

/*     <div className="in-progress flex-justify-center">
      <h2>***** IN PROGRESS *****</h2>
    </div> */
