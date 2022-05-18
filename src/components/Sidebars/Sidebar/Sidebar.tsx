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

interface Tabs {
  id: number;
  name: string;
  active: boolean;
  icon: any;
  link: string;
}

const Sidebar = () => {
  const [tabs, setTabs] = useState<Tabs[]>([
    {
      id: 1,
      name: "Dashboard",
      active: false,
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
          <img src={"http://localhost:3000/assets/logo.png"} alt="logo" />
        </div>
      </header>
      <nav className="nav-sidebar">
        <ul>
          {tabs.map((tab: any , index: number) => {
            const { link, active, id, name, icon } = tab;
            return <Tab link={link} />;
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
