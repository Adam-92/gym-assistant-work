import { useState } from "react";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faDumbbell,
  faGear,
  faRightFromBracket,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Tab from "../../Tab/Tab";
import { SidebarTabs } from "../../../model/Model";
import "./Sidebar.css";

const Sidebar = () => {
  const [tabs, setTabs] = useState<SidebarTabs[]>([
    {
      id: 1,
      name: "Dashboard",
      icon: faWindows,
      to: "/dashboard"
    },
    {
      id: 2,
      name: "Exercises",
      icon: faDumbbell,
      to: "/exercises"
    },
    {
      id: 3,
      name: "Plan",
      icon: faCalendarDays,
      to: "/plan"
    },
    {
      id: 4,
      name: "Settings",
      icon: faGear,
      to: "/settings"
    },
    {
      id: 5,
      name: "Logout",
      icon: faRightFromBracket,
      to: "/logout"
    },
  ]);

  return (
    <aside className="container-sidebar">
      <header>
        <div className="img-container-sidebar">
          <img src={"http://localhost:3000/assets/logo.png"} alt="logo" />
        </div>
      </header>
      <nav className="nav-sidebar">
        <ul>
          {tabs.map((tab: SidebarTabs , index: number) => {
            const { to, id, name, icon } = tab;
            return (
              <Tab 
                icon={icon} 
                id={id} to={to} 
                name={name} 
                key={index}
              />
            )
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
