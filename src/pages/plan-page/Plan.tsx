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

  const addNewDataToDashboard = async () => {
    const ref = doc(db, `exampleDashboardData/stepsChart`);

    try {
      await setDoc(
        ref,
        {
          weeklyData: [
            {
              day: "Mon",
              steps: 6400,
            },
            {
              day: "Tue",
              steps: 5300,
            },
            {
              day: "Wed",
              steps: 12400,
            },
            {
              day: "Thu",
              steps: 8845,
            },
            {
              day: "Fri",
              steps: 9400,
            },
            {
              day: "Sat",
              steps: 1200,
            },
            {
              day: "Sun",
              steps: 400,
            },
          ],
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add new exercise: </h2>
      <button onClick={registerNewExercise}>Click</button>

      <h2>Add new data to dashboard</h2>
      <button onClick={addNewDataToDashboard}>Click</button>
    </>
  );
};

export default Plan;
