import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarTabs, SidebarTabsChildren } from "../../model/Model";
import { useResolvedPath, useMatch, useNavigate } from "react-router";
import { signOutUser } from "../../services/Auth";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tab.css";

const Tab = ({ name, to, id, icon, children }: SidebarTabs) => {
  const [openNested, setOpenNested] = useState(false);

  const { setFirebaseError } = useGlobalContext();

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });
  console.log("🚀 ~ match", match);
  const navigate = useNavigate();

  return (
    <li className={`${match && "active-tab focus-tab"}`}>
      <Link
        to={to}
        className="link-tab"
        key={id}
        onClick={() =>
          name === "Logout" ? signOutUser(setFirebaseError, navigate) : null
        }
      >
        <FontAwesomeIcon
          icon={icon}
          color="white"
          size="lg"
          className={`icon-tab ${match && "focus-tab"}`}
        />
        <div onClick={() => setOpenNested((prev) => !prev)}>
          <h4 className={`margin-tab ${match && "focus-tab"}`}>{name}</h4>
        </div>
      </Link>
      <ul className={`children-tab ${openNested && "show-tab"}`}>
        {children &&
          children.map(({ name, to }: SidebarTabsChildren) => {
            return (
              <li key={name} className={`${match && "active-children-tab"}`}>
                <Link to={to} className="link-nested-tab ">
                  {name}
                </Link>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default Tab;
