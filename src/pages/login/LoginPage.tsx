import "./LoginPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLogin } from "./LoginPage.model";
import { validationWithoutWhiteSpaces } from "src/validation/validation";
import useSignIn from "src/auth/hooks/useSignIn";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "onChange",
  });
  const { makeRequest, error } = useSignIn();

  const onSubmit: SubmitHandler<FormLogin> = (credentials) =>
    makeRequest(credentials);

  return (
    <main className="container-login">
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
              {error && <h5 className="error-login-panel">{error}</h5>}
              <button type="submit" className="submit-login-panel">
                Log In
              </button>
            </form>
          </section>
          <section className="links-login-panel">
            <Link to="/register" className="link-login-panel">
              Create new account !
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
};

export default LoginPage;
