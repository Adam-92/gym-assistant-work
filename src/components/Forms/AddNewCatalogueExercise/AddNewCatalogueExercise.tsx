import { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "src/config/firebase";
import { CatalogueNewExerciseFormValues } from "src/model/Forms.model";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useGlobalContext } from "src/contexts/GlobalContext";
import { setNewExercise } from "src/services/Activity";
import ChooseTheBodyPart from "src/components/Forms/AddNewCatalogueExercise/ChooseTheBodyPart";
import ExerciseDescription from "./ExerciseTips";
import SecondaryArrangeMuscles from "./SecondaryArrangeMuscles";
import SelectPicture from "./SelectPicture";
import ExerciseName from "./ExerciseName";
import "./AddNewCatalogueExercise.css";
import SuccesfullyAddedNewCatalogueExercise from "src/components/Modals/SuccesfullyAddedNewCatalogueExercise/SuccesfullyAddedNewCatalogueExercise";

const AddNewCatalogueExercise = () => {
  const { currentUser } = useGlobalContext();

  const [submittedForm, setSubmittedForm] = useState<boolean | string>(false);

  const methods = useForm<CatalogueNewExerciseFormValues>({
    defaultValues: {
      tips: [{ tip: "" }],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<CatalogueNewExerciseFormValues> = (data) => {
    console.log("🚀 ~ data", data);
    setNewExercise(data, currentUser);

    const unsub = onSnapshot(
      doc(db, `userExercises/${currentUser.uid}/${data.part}/exercises`),
      (doc) => {
        console.log("Current data: ", doc.data());
        setSubmittedForm(data.part.toLowerCase());
      }
    );
  };

  return (
    <article className="container-add-new-catalogue">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="row-add-new-catalogue">
            <section className="col-add-new-catalogue">
              <ChooseTheBodyPart />
              <SecondaryArrangeMuscles />
            </section>
            <section className="col-add-new-catalogue">
              <div className="field-add-new-catalogue">
                <ExerciseName />
                <ExerciseDescription />
              </div>
              <SelectPicture />
            </section>
          </div>
          <div className="row-add-new-catalogue">
            <button className="btn-add-new-catalogue">ADD</button>
          </div>
        </form>
      </FormProvider>
      {submittedForm && (
        <SuccesfullyAddedNewCatalogueExercise partName={submittedForm} />
      )}
    </article>
  );
};

export default AddNewCatalogueExercise;
