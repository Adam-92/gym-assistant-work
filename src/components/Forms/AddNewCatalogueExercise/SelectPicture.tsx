import { useEffect, useState } from "react";
import { ExamplePicturesAddCatalogue } from "src/model/Forms.model";
import { getExamplePicturesAddNew } from "../../../services/Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "react-hook-form";

const SelectPicture = () => {
  const [data, setData] = useState<ExamplePicturesAddCatalogue[]>([]);

  useEffect(() => {
    getExamplePicturesAddNew().then((pictures: ExamplePicturesAddCatalogue[]) =>
      setData(pictures)
    );
  }, []);

  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log("🚀 ~ errors", errors);

  let fileExist;

  return (
    <div className="field-add-new-catalogue">
      <h2>Upload pictures - optional:</h2>
      <article>
        <section className="upload-files-add-new-catalogue">
          <label htmlFor="mainImg" className="file-add-new-catalogue">
            <FontAwesomeIcon icon={faUpload} />
            <p>catalogue picture</p>
            <input id="mainImg" type="file" {...register("mainImg")} />
          </label>
          <label htmlFor="detailsImg" className="file-add-new-catalogue">
            <FontAwesomeIcon icon={faUpload} />
            <p>catalogue picture</p>
            <input id="detailsImg" type="file" {...register("detailsImg")} />
          </label>
        </section>
        <p className="example-add-new-catalogue center-add-new-catalogue">
          Or use one from our example pictures
        </p>
        <section className="upload-files-add-new-catalogue">
          {data.map(({ id, img, name }: ExamplePicturesAddCatalogue) => {
            return (
              <label
                htmlFor={id + name}
                key={id}
                className="picture-files-add-new-catalogue"
              >
                <img src={img} alt={name} />
                <input
                  id={id + name}
                  value={name}
                  type="radio"
                  {...register("image", { required: "Select or upload image" })}
                />
              </label>
            );
          })}
        </section>
      </article>
      <p className="error-login-panel">{errors.image?.message}</p>
    </div>
  );
};

export default SelectPicture;
