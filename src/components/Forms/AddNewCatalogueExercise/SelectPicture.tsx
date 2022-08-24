import { useEffect, useState } from "react";
import {
  ExamplePicturesAddCatalogue,
  PictureSelection,
} from "src/model/Forms.model";
import { getExamplePicturesAddNew } from "../../../services/Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "react-hook-form";
import { selectPictureValidation } from "../Validation/ValidationRules";
 
const SelectPicture = () => {
  const [data, setData] = useState<ExamplePicturesAddCatalogue[]>([]);
  const [isFileExist, setIsFileExist] = useState<boolean | FileList>(false);
    
  useEffect(() => {
    getExamplePicturesAddNew().then((pictures: ExamplePicturesAddCatalogue[]) =>
      setData(pictures)
    );
  }, []);

  const {
    register,
    formState: { errors },
    clearErrors
  } = useFormContext();


  const uploadFileInputs = [
    {
      id: 1,
      name: "cataloguePicture",
      icon: faUpload,
      text: "Details Picture",
    },
    {
      id: 2,
      name: "detailsPicture",
      icon: faUpload,
      text: "Details Picture",
    },
  ];

  let validate = selectPictureValidation(isFileExist);

  return (
    <div className="field-add-new-catalogue">
      <h2>Upload pictures:</h2>
      <article>
        <section className="upload-files-add-new-catalogue">
          {uploadFileInputs.map(
            ({ id, name, text, icon }: PictureSelection) => {
              return (
                <label
                  key={id + name}
                  htmlFor={id + name}
                  className="file-add-new-catalogue"
                >
                  <FontAwesomeIcon icon={icon} />
                  <p>{text}</p>
                  <input
                    id={id + name}
                    type="file"
                    {...register(`${name}`, {
                      onChange: (e) => {
                        setIsFileExist(e.target.files)
                        clearErrors("exampleImage")
                      },
                    })}
                  />
                </label>
              );
            }
          )}
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
                className={`${
                  isFileExist && "off-add-new-catalogue"
                } picture-files-add-new-catalogue`}
              >
                <img src={img} alt={name} />
                <input
                  id={id + name}
                  value={name}
                  type="radio"
                  {...register("exampleImage", validate)}
                />
              </label>
            );
          })}
        </section>
      </article>
      <p className="error-login-panel">{errors.exampleImage?.message}</p>
    </div>
  );
};

export default SelectPicture;
