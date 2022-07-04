import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarTabs } from "../../model/Model";
import {
  useResolvedPath,
  useMatch,
  useNavigate
} from "react-router";
import { signOutUser } from "../../services/Auth";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "./Tab.css";

const Tab = ({ name, to, id, icon }: SidebarTabs) => {
  const { setFirebaseError } = useGlobalContext();

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });
  const navigate = useNavigate();

  return (
    <li className={`${match && "active-tab focus-tab"}`}>
      <Link
        to={to}
        className="link-tab"
        key={id}
        onClick={() => {
          return name === "Logout"
            ? signOutUser(setFirebaseError, navigate)
            : null;
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          color="white"
          size="lg"
          className={`icon-tab ${match && "focus-tab"}`}
        />
        <h4 className={`margin-tab ${match && "focus-tab"}`}>{name}</h4>
      </Link>
    </li>
  );
};

export default Tab;
