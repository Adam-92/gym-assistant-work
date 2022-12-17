import { ChildTabProps } from "../Sidebar.model";
import { Link, useResolvedPath, useMatch, useParams } from "react-router-dom";
import { useSidebar } from "src/contexts/sidebar/hooks/useSidebar";
import "./ChildTab.css";

const ChildTab = ({ name, to }: ChildTabProps) => {
  const params = useParams();
  const endMatch = Object.keys(params).length === 0 ?? false;

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: endMatch });

  const { closeSidebar } = useSidebar();

  return (
    <li key={name} className={`${match && "active-child-tab"}`}>
      <Link to={to} className="link-child-tab" onClick={closeSidebar}>
        {name}
      </Link>
    </li>
  );
};

export default ChildTab;
