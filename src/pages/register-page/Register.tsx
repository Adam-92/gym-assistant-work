import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormRegister } from "./Register.model";
import { validationWithoutWhiteSpaces } from "src/components/Forms/Validation/ValidationRules";
import useSignUp from "src/auth/hooks/useSignUp";
import "./Register.css";

const Register = () => {
  const { makeRequest, error } = useSignUp();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<FormRegister>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormRegister> = (credentials) =>
    makeRequest(credentials);

  return (
    <main className="container-register">
      <article className="center-register-panel">
        <div className="container-register-panel">
          <section className="icon-register-panel">
            <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
          </section>
          <section className="form-register-panel">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative-register-panel">
                <FontAwesomeIcon
                  icon={faUser}
                  color="white"
                  className="absolute-register-panel"
                />
                <input
                  type="text"
                  {...register("username", validationWithoutWhiteSpaces(8, 26))}
                  placeholder="Username"
                ></input>
              </div>
              <h5 className="error-register-panel">
                {errors.username?.message}
              </h5>
              <div className="relative-register-panel">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="white"
                  className="absolute-register-panel"
                />
                <input
                  type="email"
                  placeholder="Email Adress"
                  {...register("email", {
                    required: "Please fill out this field",
                    setValueAs: (value: string) => value.split(" ").join(""),
                  })}
                ></input>
              </div>
              <h5 className="error-register-panel">{errors.email?.message}</h5>
              <div className="relative-register-panel">
                <FontAwesomeIcon
                  icon={faKey}
                  color="white"
                  className="absolute-register-panel"
                />
                <input
                  type="password"
                  {...register("password", validationWithoutWhiteSpaces(8, 26))}
                  placeholder="Password"
                ></input>
              </div>
              <h5 className="error-register-panel">
                {errors.password?.message}
              </h5>
              <div className="relative-register-panel">
                <FontAwesomeIcon
                  icon={faKey}
                  color="white"
                  className="absolute-register-panel"
                />
                <input
                  type="password"
                  {...register("PasswordRepeat", {
                    validate: {
                      matchesPreviousPassword: (value: string) => {
                        const { password } = getValues();
                        return password === value || "Passwords must match!";
                      },
                    },
                    setValueAs: (value: string) => value.split(" ").join(""),
                  })}
                  placeholder="Re - Password"
                ></input>
              </div>
              <h5 className="error-register-panel">
                {errors.PasswordRepeat?.message}
              </h5>
              {error && <h5 className="error-login-panel">{error}</h5>}
              <button className="submit-register-panel">Register</button>
            </form>
          </section>
          <div className="links-register-panel">
            <Link to="/login" className="link-register-panel">
              Sign in to your account !
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Register;
