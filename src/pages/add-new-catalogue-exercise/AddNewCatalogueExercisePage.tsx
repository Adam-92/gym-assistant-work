import { useState } from "react";
import { CatalogueNewExerciseFormValues } from "./AddNewCatalogueExercisePage.model";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { setNewExercise } from "src/firebase/services/activity";
import ChooseTheBodyPart from "./ChooseTheBodyPart";
import ExerciseDescription from "./ExerciseDescription";
import SecondaryArrangeMuscles from "./SecondaryArrangeMuscles";
import SelectPicture from "./SelectPicture";
import ExerciseName from "./ExerciseName";
import SuccesfullyAddedNewCatalogueExercise from "src/pages/add-new-catalogue-exercise/SuccesfullyAddedNewCatalogueExercise/SuccesfullyAddedNewCatalogueExercise";
import "./AddNewCatalogueExercisePage.css";

const AddNewCatalogueExercisePage = () => {
  const { currentUser } = useUserContext();

  const [submittedForm, setSubmittedForm] = useState("");

  const methods = useForm<CatalogueNewExerciseFormValues>({
    defaultValues: {
      urlImage: "",
      secondaryMuscle: [],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<CatalogueNewExerciseFormValues> = (data) => {
    setNewExercise(data, currentUser, setSubmittedForm);
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

export default AddNewCatalogueExercisePage;
