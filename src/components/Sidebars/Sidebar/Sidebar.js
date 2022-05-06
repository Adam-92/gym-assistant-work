import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faDumbbell,
  faGear,
  faRightFromBracket,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../img/logo.png";
import { changeCSSRadius } from "../../../utils/Utils";
import "./Sidebar.css";

const Sidebar = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Dashboard",
      active: true,
      icon: faWindows,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Exercises",
      active: false,
      icon: faDumbbell,
      link: "/exercises",
    },
    {
      id: 3,
      name: "Plan",
      active: false,
      icon: faCalendarDays,
      link: "/plan",
    },
    {
      id: 4,
      name: "Settings",
      active: false,
      icon: faGear,
      link: "/settings",
    },
    {
      id: 5,
      name: "Logout",
      active: false,
      icon: faRightFromBracket,
      link: "/logout",
    },
  ]);

  return (
    <aside className="container-sidebar">
      <header>
        <div className="img-container-sidebar">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <nav className="nav-sidebar">
        <ul
          onClick={(e) => {
            changeCSSRadius(e, setTabs);
          }}
        >
          {tabs.map((tab, index) => {
            const { link, active, id, name, icon } = tab;

            return (
              <Link 
                to={link} 
                className="link-sidebar" 
                key={index}
              >
                <li
                  className={`
                    ${active && "active-sidebar"}
                    ${id === 4 && "margin-sidebar"}
                    `}
                  id={id}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    color="white"
                    size="lg"
                    className={`icon-sidebar ${active && "focus-sidebar"}`}
                  />
                  {name}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
