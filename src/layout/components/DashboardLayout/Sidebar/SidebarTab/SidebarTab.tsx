import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMatch, useResolvedPath } from "react-router";
import { Link } from "react-router-dom";
import { SidebarTabProps } from "src/layout/components/DashboardLayout/Sidebar/Sidebar.model";
import "./SidebarTab.css";

const SidebarTab = ({ name, to, icon, children, onClick }: SidebarTabProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <li className={`${match && "active-sidebar-tab focus-sidebar-tab "}`}>
      <Link to={to} className="link-sidebar-tab" onClick={onClick}>
        <FontAwesomeIcon
          icon={icon}
          color="white"
          size="lg"
          className={`icon-sidebar-tab  ${match && "focus-sidebar-tab "}`}
        />
        <h4 className={`margin-sidebar-tab  ${match && "focus-sidebar-tab "}`}>
          {name}
        </h4>
      </Link>
      <ul
        className={`children-sidebar-tab  ${
          match && "show-sidebar-tab children-active-sidebar-tab  "
        }`}
      >
        {children}
      </ul>
    </li>
  );
};

export default SidebarTab;
