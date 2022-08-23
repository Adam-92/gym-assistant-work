import { useEffect, useState } from "react";
import { getSecondaryArrangeMuscles } from "../../../services/Activity";
import { SecondaryMuscles } from "src/model/Forms.model";
import { useFormContext } from "react-hook-form";

const SecondaryArrangeMuscles = () => {
  const [data, setData] = useState<SecondaryMuscles[]>([]);

  const {
    register
  } = useFormContext();

  useEffect(() => {
    getSecondaryArrangeMuscles().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="field-add-new-catalogue">
      <h2>Secondary arrange muscles - optional:</h2>
      <div className="secondary-add-new-catalogue">
        {data.map(({ id, name }: SecondaryMuscles, index: number) => {
          return (
            <div key={index}>
              <label htmlFor={id + name} className="noSelect hover-label">
                {name}
                <input
                  id={id + name}
                  value={name}
                  type="checkbox"
                  {...register("secondaryMuscle")}
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondaryArrangeMuscles;
