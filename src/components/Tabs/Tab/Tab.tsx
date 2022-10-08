import { Link } from "react-router-dom";
import { TabInterface } from "src/components/Tabs/Tabs.model";
import { useResolvedPath, useMatch } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChildrenTabInterface } from "src/components/Tabs/Tabs.model";
import NestedTab from "../NestedTab/NestedTab";
import useSignOut from "src/hooks/useSignOut";
import "./Tab.css";

const Tab = ({ name, to, id, icon, children }: TabInterface) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  const { makeRequest } = useSignOut();

  return (
    <li className={`${match && "active-tab focus-tab"}`}>
      <Link
        to={to}
        className="link-tab"
        key={id}
        onClick={() => {
          return name === "Logout" ? makeRequest() : null;
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
