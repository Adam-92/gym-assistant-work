import { ChildTabProps } from "../Sidebar.model";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./ChildTab.css";

const ChildTab = ({ name, to }: ChildTabProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <li key={name} className={`${match && "active-child-tab"}`}>
      <Link to={to} className="link-child-tab ">
        {name}
      </Link>
    </li>
  );
};

export default ChildTab;
