import { useState } from "react";
import { tabs } from "../Tabs/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TabInterface } from "src/components/Tabs/Tabs.model";
import Tab from "../Tabs/Tab/Tab";
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
            {tabs.map(({ to, id, name, icon, children }: TabInterface) => {
              return (
                <Tab
                  name={name}
                  to={to}
                  id={id}
                  icon={icon}
                  children={children}
                  key={id}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
