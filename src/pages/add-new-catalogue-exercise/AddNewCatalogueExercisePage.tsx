import { CatalogueNewExerciseFormValues } from "./AddNewCatalogueExercisePage.model";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { setNewExercise } from "src/firebase/services/catalogueActivity";
import ChooseTheBodyPart from "./components/ChooseTheBodyPart/ChooseTheBodyPart";
import ExerciseDescription from "./components/ExerciseDescription/ExerciseDescription";
import SecondaryArrangeMuscles from "./components/SecondaryArrangeMuscles/SecondaryArrangeMuscles";
import SelectPicture from "./components/SelectPicture/SelectPicture";
import ExerciseName from "./components/ExerciseName/ExerciseName";
import SuccesfullyAddedNewCatalogueExercise from "src/pages/add-new-catalogue-exercise/components/SuccesfullyAddedNewCatalogueExercise/SuccesfullyAddedNewCatalogueExercise";
import { useModal } from "src/contexts/modal/hooks/useModal";
import { useUser } from "src/contexts/user/hooks/useUser";
import "./AddNewCatalogueExercisePage.css";

const AddNewCatalogueExercisePage = () => {
  const { currentUser } = useUser();

  const { modalPartName, setModalPartName } = useModal();

  const methods = useForm<CatalogueNewExerciseFormValues>({
    defaultValues: {
      urlImage: "",
      secondaryMuscle: [],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<CatalogueNewExerciseFormValues> = (data) => {
    setNewExercise(data, currentUser.uid, setModalPartName);
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
