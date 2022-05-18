import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BrandLinkProps extends Omit<LinkProps, "to"> {
  id: number,
  link: string;
  active: boolean,
  icon: any,
  name: string
}

const Tab = ({name, link, active, id, icon }: BrandLinkProps) => {
  return (
    <Link 
      to={link} 
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
