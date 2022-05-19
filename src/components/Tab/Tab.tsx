import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarTabs } from '../Sidebars/Sidebar/Sidebar'

const Tab = ({name, to, active, id, icon }: SidebarTabs) => {
  return (
    <Link 
      to={to} 
      className="link-tab" 
      key={id}
    >
      <li
        className={`
        ${active && "active-tab"}
        ${id === 4 && "margin-tab"}
        `}
      >
        <FontAwesomeIcon
          icon={icon}
          color="white"
          size="lg"
          className={`icon-tab ${active && "focus-tab"}`}
        />
        {name}
      </li>
    </Link>
  );
};

export default Tab;
