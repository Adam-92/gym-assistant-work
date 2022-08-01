import { Link } from "react-router-dom";
import { TabInterface } from "src/model/Tabs.model";
import { useResolvedPath, useMatch, useNavigate } from "react-router";
import { signOutUser } from "../../../services/Auth";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChildrenTabInterface } from "src/model/Tabs.model";
import NestedTab from "../NestedTab/NestedTab";
import "./Tab.css";

const Tab = ({ name, to, id, icon, children }: TabInterface) => {
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
      <ul
        className={`children-tab ${match && "show-tab children-active-tab "}`}
      >
        {children?.map(({ to, name }: ChildrenTabInterface, index: number) => {
          return <NestedTab to={to} name={name} key={index} />;
        })}
      </ul>
    </li>
  );
};

export default Tab;
