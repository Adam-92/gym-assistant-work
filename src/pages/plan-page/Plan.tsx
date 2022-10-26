import { setDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "src/firebase/config/firebase";

const Plan = () => {
  // Seed ;-) - no narazie taki... póżniej rozbuduje by był pełny formularz i miło się dodawało...dla admina

  const registerNewExercise = async () => {
    //Musi iśc duża litera
    const bodyPart = "Biceps";
    try {
      const ref = doc(db, `forAllUsersExercises/${bodyPart}`);

      await setDoc(ref, {
        exercises: [
          {
            name: `${bodyPart}AllUsers2`,
            exerciseDescription: `${bodyPart}AllUsersDescription`,
            secondaryMuscle: [],
            exampleImage: "../assets/example3.jpg",
            urlImage: "",
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

  return (
    <>
      <h1>Add new exercise: </h1>
      <button onClick={registerNewExercise}>Click</button>
    </>
  );
};

export default Plan;
