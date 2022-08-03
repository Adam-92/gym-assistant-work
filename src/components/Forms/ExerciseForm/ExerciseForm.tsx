import BodyIcon from "src/components/BodyIcon/BodyIcon";
import useAddCatalogue from "src/hooks/useAddCatalogue";
import { IconProps } from "src/model/BodyIcon.model";
import { icons } from "../../BodyIcon/Icons";
import "./ExerciseForm.css";

const ExerciseForm = () => {
  const { selectIcon } = useAddCatalogue();

  return (
    <article className="container-exercise-form">
      <div className="choose-exercise-form">
        <div className="question-exercise-form">
          <div>1.</div>
          <h1>Choose the body part</h1>
        </div>
        <section className="icons-exercise-form">
          {icons.map(({ icon, title, active }: IconProps, index: number) => {
            return (
              <BodyIcon
                key={index}
                icon={icon}
                title={title}
                active={active}
                selectIcon={selectIcon}
              />
            );
          })}
        </section>
      </div>
      <button>ADD</button>
    </article>
  );
};

export default ExerciseForm;
