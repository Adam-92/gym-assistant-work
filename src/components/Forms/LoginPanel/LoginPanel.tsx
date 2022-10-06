import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLogin } from "src/components/Forms/Forms.model";
import { signIn } from "../../../firebase/services/Auth";
import { validationWithoutWhiteSpaces } from "../Validation/ValidationRules";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import "./LoginPanel.css";

const LoginPanel = () => {
  const { firebaseError, setFirebaseError } = useGlobalContext();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormLogin> = ({ password, email }) => {
    signIn(password, email, setFirebaseError, navigate);
  };

  return (
    <article className="center-login-panel">
      <div className="container-login-panel">
        <section className="icon-login-panel">
          <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
        </section>
        <section className="form-login-panel">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="email"
                {...register("email", {
                  required: "Please fill out this field",
                  setValueAs: (value: string) => value.split(" ").join(""),
                })}
                placeholder="Email"
              ></input>
            </div>
            <h5 className="error-login-panel">{errors.email?.message}</h5>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="password"
                {...register("password", validationWithoutWhiteSpaces(8, 26))}
                placeholder="Password"
              ></input>
            </div>
            <h5 className="error-login-panel">{errors.password?.message}</h5>
            {firebaseError && (
              <h5 className="error-login-panel">{firebaseError}</h5>
            )}
            <button type="submit" className="submit-login-panel">
              Log In
            </button>
          </form>
        </section>
        <section className="links-login-panel">
          <Link to="/register" className="link-login-panel">
            Create new account
          </Link>
          <Link to="" className="link-login-panel">
            Forgot your password ?
          </Link>
        </section>
      </div>
    </article>
  );
};

export default LoginPanel;
