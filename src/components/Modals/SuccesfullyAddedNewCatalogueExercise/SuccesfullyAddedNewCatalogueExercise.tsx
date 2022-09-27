import "./SuccesfullyAddedNewCatalogueExercise.css";
import "../WelcomeModal/WelcomeModal.css";
import { useNavigate } from "react-router";

const SuccesfullyAddedNewCatalogueExercise = ({
  partName,
}: {
  partName: boolean | string;
}) => {
  console.log("🚀 ~ partName", partName);
  const navigate = useNavigate();

  return (
    <article className="container-succesfully-added">
      <h2>Thanks, you have succesfully added new exercise</h2>
      <button type="button" onClick={() => navigate(`/catalogue/${partName}`)}>
        Go To Catalogue
      </button>
    </article>
  );
};

export default SuccesfullyAddedNewCatalogueExercise;
