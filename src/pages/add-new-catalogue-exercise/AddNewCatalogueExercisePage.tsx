import { CatalogueNewExerciseFormValues } from "./AddNewCatalogueExercisePage.model";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { setNewExercise } from "src/firebase/services/activity";
import ChooseTheBodyPart from "./components/ChooseTheBodyPart/ChooseTheBodyPart";
import ExerciseDescription from "./components/ExerciseDescription/ExerciseDescription";
import SecondaryArrangeMuscles from "./components/SecondaryArrangeMuscles/SecondaryArrangeMuscles";
import SelectPicture from "./components/SelectPicture/SelectPicture";
import ExerciseName from "./components/ExerciseName/ExerciseName";
import SuccesfullyAddedNewCatalogueExercise from "src/pages/add-new-catalogue-exercise/components/SuccesfullyAddedNewCatalogueExercise/SuccesfullyAddedNewCatalogueExercise";
import { useAddedExerciseModal } from "src/contexts/addedExerciseModal/hooks/useAddedExerciseModal";
import "./AddNewCatalogueExercisePage.css";

const AddNewCatalogueExercisePage = () => {
  const { currentUser } = useUserContext();
  const { modalPartName, setModalPartName } = useAddedExerciseModal();

  const methods = useForm<CatalogueNewExerciseFormValues>({
    defaultValues: {
      urlImage: "",
      secondaryMuscle: [],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<CatalogueNewExerciseFormValues> = (data) => {
    setNewExercise(data, currentUser, setModalPartName);
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
      {modalPartName && <SuccesfullyAddedNewCatalogueExercise />}
      <div
        className={`${modalPartName && "modal-dark-add-new-catalogue"}`}
      ></div>
    </article>
  );
};

export default AddNewCatalogueExercisePage;
