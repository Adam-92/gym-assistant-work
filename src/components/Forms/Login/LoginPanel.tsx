import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./LoginPanel.css";

interface ValuesInterface {
  email: string,
  password: string
}

interface ErrorInterface {
  status: boolean,
  msg: string
}

const LoginPanel = () => {
  const [values, setValues] = useState<ValuesInterface>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<ErrorInterface>({
    status: false,
    msg: "",
  });
  
  return (
    <article className="center-login-panel">
      <div className="container-login-panel">
        <section className="icon-login-panel">
          <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
        </section>
        <section className="form-login-panel">
          <form onSubmit={()=>{}}>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faUser}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
              ></input>
            </div>
            <div className="checkbox-login-panel">
              <label className="remember-login-panel">
                <input type="checkbox"></input>
                Remember Me
              </label>
            </div>
            <button type="submit" className="submit-login-panel">
              Log In
            </button>
          </form>
        </section>
        {error.status && <h4 className="error-login-panel">{error.msg}</h4>}
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
