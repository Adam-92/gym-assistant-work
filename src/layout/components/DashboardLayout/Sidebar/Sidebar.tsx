import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { tabs } from "./tabs";
import SidebarTab from "./SidebarTab/SidebarTab";
import ChildTab from "./ChildTab/ChildTab";
import "./Sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <aside className={`container-sidebar ${showSidebar && "show-sidebar"}`}>
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleSidebar}
        size="2x"
        className="toggler-sidebar"
      />
      <div
        className={`content-sidebar ${showSidebar && "show-content-sidebar"}`}
      >
        <header>
          <div className="img-container-sidebar">
            <img src={"http://localhost:3000/assets/logo.png"} alt="logo" />
          </div>
        </header>
        <nav className="nav-sidebar">
          <ul className="parent-sidebar">
            {tabs.map(({ to, name, icon, childTabs }) => {
              return (
                <SidebarTab name={name} to={to} icon={icon} key={to + name}>
                  {childTabs?.map((tab) => (
                    <ChildTab name={tab.name} to={tab.to} key={tab.name} />
                  ))}
                </SidebarTab>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
