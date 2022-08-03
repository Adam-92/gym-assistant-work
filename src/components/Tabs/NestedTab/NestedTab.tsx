import { ChildrenTabInterface } from "src/model/Tabs.model";
import { Link, useResolvedPath, useMatch, useLocation } from "react-router-dom";
import "./NestedTab.css";

const NestedTab = ({ name, to }: ChildrenTabInterface) => {
  
  const location = useLocation()
  const matchEnd = (location.pathname === "/catalogue" || location.pathname === "/catalogue/modify" ) ? true : false 
  
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: matchEnd });

  return (
    <li key={name} className={`${match && "active-nested-tab"}`}>
      <Link to={to} className="link-nested-tab ">
        {name}
      </Link>
    </li>
  );
};

export default NestedTab;
