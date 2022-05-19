import { useState } from "react";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faDumbbell,
  faGear,
  faRightFromBracket,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Tab from "../../Tab/Tab";
import "./Sidebar.css";

export interface SidebarTabs {
  id: number,
  name: string,
  active: boolean,
  icon: any,
  to: string
}

const Sidebar = () => {
  const [tabs, setTabs] = useState<SidebarTabs[]>([
    {
      id: 1,
      name: "Dashboard",
      active: false,
      icon: faWindows,
      to: "/dashboard",
    },
    {
      id: 2,
      name: "Exercises",
      active: false,
      icon: faDumbbell,
      to: "/exercises",
    },
    {
      id: 3,
      name: "Plan",
      active: false,
      icon: faCalendarDays,
      to: "/plan",
    },
    {
      id: 4,
      name: "Settings",
      active: false,
      icon: faGear,
      to: "/settings",
    },
    {
      id: 5,
      name: "Logout",
      active: false,
      icon: faRightFromBracket,
      to: "/logout",
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
          {tabs.map((tab: any , index: number) => {
            const { to, active, id, name, icon } = tab;
            return <Tab icon={icon} active={active} id={id} to={to} name={name} />;
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
