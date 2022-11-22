import { setDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "src/firebase/config/firebase";

const Plan = () => {
  // Seed ;-) - no narazie taki... póżniej rozbuduje by był pełny formularz i miło się dodawało...dla admina

  const registerNewExercise = async () => {
    //Musi iśc duża litera
    const bodyPart = "Triceps";
    try {
      const ref = doc(db, `forAllUsersExercises/${bodyPart}`);

      await setDoc(ref, {
        exercises: [
          {
            name: `triceps primer`,
            exerciseDescription: `Bring the barbell to chest level then return it back to the starting position. Keep your elbows tucked in close to your sides and don't use momentum to raise the weight.`,
            secondaryMuscle: ["Triceps, Abs, Front delts"],
            exampleImage: "",
            urlImage:
              "https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/triple-header-tricep-workout-wide.jpg",
            part: `${bodyPart}`,
            allUsers: true,
            results: [
              {
                label: "12.05",
                sets: [
                  { weight: 8, reps: 10 },
                  { weight: 12, reps: 8 },
                  { weight: 20, reps: 8 },
                ],
              },
              {
                label: "17.05",
                sets: [
                  { weight: 12, reps: 10 },
                  { weight: 15, reps: 8 },
                  { weight: 17, reps: 5 },
                ],
              },
              {
                label: "19.05",
                sets: [
                  { weight: 12, reps: 10 },
                  { weight: 15, reps: 8 },
                  { weight: 20, reps: 4 },
                ],
              },
              {
                label: "21.05",
                sets: [
                  { weight: 15, reps: 8 },
                  { weight: 15, reps: 6 },
                  { weight: 25, reps: 5 },
                ],
              },
              {
                label: "27.05",
                sets: [
                  { weight: 25, reps: 8 },
                  { weight: 25, reps: 6 },
                  { weight: 40, reps: 5 },
                ],
              },
              {
                label: "30.05",
                sets: [
                  { weight: 25, reps: 8 },
                  { weight: 25, reps: 6 },
                  { weight: 42, reps: 5 },
                ],
              },
              {
                label: "05.07",
                sets: [
                  { weight: 25, reps: 8 },
                  { weight: 25, reps: 6 },
                  { weight: 47, reps: 5 },
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
