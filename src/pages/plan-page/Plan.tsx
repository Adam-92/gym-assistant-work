import { setDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "src/firebase/config/firebase";

const Plan = () => {
  // Seed ;-) - no narazie taki... póżniej rozbuduje by był pełny formularz i miło się dodawało...dla admina

  const registerNewExercise = async () => {
    //Musi iśc duża litera
    const bodyPart = "Legs";
    try {
      const ref = doc(db, `forAllUsersExercises/${bodyPart}`);

      await setDoc(ref, {
        exercises: [
          {
            name: `back legs muscles`,
            exerciseDescription: `"Leg day"—the very phrase conjures up images of nausea, days of hobbling, and legs that feel like jello. The feelings may be universal, but bodybuilders looking to annihilate`,
            secondaryMuscle: ["Abs", "Traps"],
            exampleImage: "",
            urlImage:
              "https://www.bodybuilding.com/images/2016/june/leg-workouts-for-men-7-best-workouts-for-quads-glutes-hams-header-v2-960x540.jpg",
            part: `${bodyPart}`,
            allUsers: true,
            results: [
              {
                label: "12.05",
                sets: [
                  { weight: 95, reps: 5 },
                  { weight: 95, reps: 3 },
                  { weight: 97.5, reps: 1 },
                ],
              },
              {
                label: "17.05",
                sets: [
                  { weight: 100, reps: 3 },
                  { weight: 102, reps: 3 },
                  { weight: 105, reps: 3 },
                  { weight: 107, reps: 3 },
                ],
              },
              {
                label: "19.05",
                sets: [
                  { weight: 102, reps: 2 },
                  { weight: 100, reps: 2 },
                ],
              },
              {
                label: "21.05",
                sets: [
                  { weight: 105, reps: 2 },
                  { weight: 103, reps: 2 },
                  { weight: 103, reps: 2 },
                ],
              },
              {
                label: "27.05",
                sets: [
                  { weight: 125, reps: 2 },
                  { weight: 113, reps: 2 },
                  { weight: 103, reps: 2 },
                ],
              },
              {
                label: "30.05",
                sets: [
                  { weight: 105, reps: 2 },
                  { weight: 103, reps: 2 },
                  { weight: 130, reps: 2 },
                ],
              },
              {
                label: "05.07",
                sets: [
                  { weight: 105, reps: 2 },
                  { weight: 103, reps: 2 },
                  { weight: 140, reps: 2 },
                ],
              },
            ],
          },
        ],
      });
      //Dodaje jedno ćwiczenie przy pustej liście lub updatuje jedno istniejące
      onSnapshot(doc(db, `forAllUsersExercises/${bodyPart}`), (doc) => {
        if (doc.exists()) {
          alert(`New ex section --> ${bodyPart} `);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Add new exercise: </h1>
      <button onClick={registerNewExercise}>Click</button>
    </>
  );
};

export default Plan;
